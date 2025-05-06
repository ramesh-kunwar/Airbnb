import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helper";
import DailyRotateFile from "winston-daily-rotate-file";
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "MM-DD-YYYY HH:mm:ss" }),
    winston.format.json(),
    // define a custom print
    winston.format.printf(({ timestamp, level, message, ...data }) => {
      const output = {
        timestamp,
        level,
        message,
        correlationId: getCorrelationId(),
        data,
      };
      return JSON.stringify(output);
    })
  ),
  transports: [
    new winston.transports.Console(),
    // save the logs to a file
    new DailyRotateFile({
      level: "info",
      filename: "logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      maxSize: "20m",
      maxFiles: "14d",
    }),

    // @todo Add logic to save logs in mongodb
  ],
});

export default logger;
