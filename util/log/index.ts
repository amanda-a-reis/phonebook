import winston from 'winston'

const fileTransport = new winston.transports.File({ filename: 'logs.txt' })
const consoleTransport = new winston.transports.Console()

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    fileTransport,
    consoleTransport
  ]
})

export { logger }
