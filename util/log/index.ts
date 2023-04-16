import winston from 'winston'

const fileTransport = new winston.transports.File({ filename: 'logs.txt' })

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [fileTransport]
})

export { logger }
