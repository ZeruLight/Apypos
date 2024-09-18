import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: "mhxr-server" },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
