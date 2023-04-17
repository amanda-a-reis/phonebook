import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Contact, ContactInfo } from '@/util/interfaces'
import { logger } from '@/util/log'

async function getContacById (id: number): Promise<Contact> {
  const contact = await prisma.contact.findUnique({
    where: {
      id
    },
    include: {
      phones: true
    }
  }) as Contact

  return contact
}

async function deleteContact (id: number): Promise<void> {
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
  const now = new Date().toLocaleString('pt-BR')
  const logMsg = `Contact id: ${id} was deleted at ${now}`
  logger.info(logMsg)
}

async function createLogDb (): Promise<any> {
  const now = new Date().toLocaleString('pt-BR')
  const logMsg = `Contact was deleted at ${now}`
  await prisma.log.create({
    data: {
      message: logMsg
    }
  })
}

async function updateContact (id: number, name: string, age: number): Promise<Contact> {
  let contact: Contact
  if (name) {
    contact = await prisma.contact.update({
      where: {
        id
      },
      data: {
        name
      },
      include: {
        phones: true
      }
    })
  }
  if (age) {
    contact = await prisma.contact.update({
      where: {
        id
      },
      data: {
        age
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
  }) as Contact
  return contact
}

async function updatePhone (id: number, phone: string): Promise<void> {
  await prisma.phone.update({
    where: {
      id
    },
    data: {
      number: phone
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
      await createLogDb()
      res.status(200).end('User deleted.')
      break
    }
    case 'PUT': {
      const { id } = req.query
      const {
        name,
        age,
        phones
      }: ContactInfo<number, string[]> = req.body
      const contact = await updateContact(Number(id), name, age)
      if (phones) {
        phones.map(async (phone: string, index: number) => {
          if (contact.phones[index].number === phone) {
            return true
          } else {
            await updatePhone(contact.phones[index].id, phone)
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
