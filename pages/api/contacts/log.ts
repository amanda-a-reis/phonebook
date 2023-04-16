import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

function getLogFile (path: string): string {
  const logs: string = fs.readFileSync(path, 'utf-8')
  return logs
}

const rootDir = process.cwd()
const pathFile = path.join(rootDir, 'logs.txt')

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req
  switch (method) {
    case 'GET': {
      try {
        const logs = getLogFile(pathFile)
        res.status(200).end(logs)
      } catch (error) {
        res.status(500).end('No logs file found')
      }
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end('Method Not Allowed')
  }
}
