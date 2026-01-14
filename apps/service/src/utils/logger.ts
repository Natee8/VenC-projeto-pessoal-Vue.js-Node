import pino from 'pino'
import env from './env.js'

const logger = pino({
  formatters: {
    level: (level: string) => ({ level })
  },
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  ...((env('NODE_ENV') === 'development' || env('NODE_ENV') === 'local') && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true,
        ignore: 'time,pid,hostname'
      }
    }
  })
})

export default logger
