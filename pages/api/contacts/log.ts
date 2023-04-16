import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

// function getLogFile (path: string): string {
//   const logs: string = fs.readFileSync(path, 'utf-8')
//   return logs
// }
// const rootDir = process.cwd()
// const pathFile = path.join(rootDir, 'logs.txt')

async function getLogFile (): Promise<any> {
  const logs = await prisma.log.findMany()
  return logs
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req
  switch (method) {
    case 'GET': {
      const logs = await getLogFile()
      console.log(logs)
      res.status(200).json({ logs })
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end('Method Not Allowed')
  }
}
