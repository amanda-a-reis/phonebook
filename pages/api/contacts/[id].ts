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
    default:
      res.setHeader('Allow', ['GET', 'DELETE'])
      res.status(405).end('Method Not Allowed')
  }
}
