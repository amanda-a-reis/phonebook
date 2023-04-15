import prisma from '@/lib/prisma'
import type { Contact } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

async function createContact (
  name: string,
  age: number,
  phones: string[]
): Promise<Contact> {
  const result = await prisma.contact.create({
    data: {
      name,
      age,
      phones: {
        create: phones.map((phone: string) => {
          return { number: phone }
        })
      }
    }
  })
  return result
}

async function getAllContacts (): Promise<Contact[]> {
  const contacts = await prisma.contact.findMany({
    include: {
      phones: true
    },
    orderBy: {
      id: 'desc'
    }
  })

  return contacts
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req
  switch (method) {
    case 'POST': {
      const {
        name,
        age,
        phones
      }: { name: string, age: number, phones: string[] } = req.body
      const result = await createContact(name, age, phones)
      res.status(201).json({ result })
      break
    }
    case 'GET': {
      const allContacts = await getAllContacts()
      res.status(200).json({ contacts: allContacts })
      break
    }
    default:
      res.setHeader('Allow', ['POST', 'GET'])
      res.status(405).end('Method Not Allowed')
  }
}
