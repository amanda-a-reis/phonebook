import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

async function getContacById (id: number): Promise<any> {
  const contact = await prisma.contact.findUnique({
    where: {
      id
    },
    include: {
      phones: true
    }
  })

  return contact
}

async function deleteContact (id: number): Promise<any> {
  await prisma.phone.deleteMany({
    where: {
      contactId: id
    }
  })
  await prisma.contact.deleteMany({
    where: {
      id
    }
  })
}

async function updateContact (id: number, contactData: any): Promise<any> {
  let contact: any
  if (contactData.name) {
    contact = await prisma.contact.update({
      where: {
        id
      },
      data: {
        name: contactData.name
      },
      include: {
        phones: true
      }
    })
  }
  if (contactData.age) {
    contact = await prisma.contact.update({
      where: {
        id
      },
      data: {
        age: contactData.age
      },
      include: {
        phones: true
      }
    })
  }
  contact = await prisma.contact.findUnique({
    where: {
      id
    },
    include: {
      phones: true
    }
  })
  return contact
}

async function updatePhone (id: number, phoneData: any): Promise<any> {
  await prisma.phone.update({
    where: {
      id
    },
    data: {
      number: phoneData.phone
    }
  })
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req
  switch (method) {
    case 'GET': {
      const { id } = req.query
      const contact = await getContacById(Number(id))
      res.status(200).json({ contact })
      break
    }
    case 'DELETE': {
      const { id } = req.query
      await deleteContact(Number(id))
      res.status(200).end('User deleted.')
      break
    }
    case 'PUT': {
      const { id } = req.query
      const {
        name,
        age,
        phones
      }: { name: string, age: number, phones: string[] } = req.body
      const contact = await updateContact(Number(id), { name, age })
      if (phones) {
        phones.map(async (phone: any, index: number) => {
          if (contact.phones[index].number === phone.number) {
            return true
          } else {
            await updatePhone(contact.phones[index].id, { phone })
          }
        })
      }
      res.status(200).end('Contact edited.')
      break
    }
    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
      res.status(405).end('Method Not Allowed')
  }
}
