import dotenv from 'dotenv';
dotenv.config();

import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const NODE_ENV = process.env.NODE_ENV || 'development';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new DailyRotateFile({
      filename: 'logs/%DATE%-results.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: "20m",
      maxFiles: "14d"
    })
  ]
});

if (NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}
