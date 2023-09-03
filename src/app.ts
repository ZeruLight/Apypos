import express from "express";
import routes from "./routes";
import expressWinston from "express-winston";
import { logger } from "./logger";
import winston from "winston";

const app = express();

// Middleware configurations
app.use(express.json());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf((info) => {
        if (info.meta && info.meta.req && info.meta.res) {
          const { req, res, responseTime } = info.meta;
          return `Request: ${JSON.stringify(req)} | Response: ${res.statusCode} ${responseTime}ms`;
        }
        return info.message; // fallback to default message if req and res aren't available
      })
    ),
    meta: true, // this is important to ensure the req and res objects are available
    expressFormat: true,
    colorize: true,
  })
);

// Setup routes
app.use("/", routes);

// Error logger middleware
app.use(
  expressWinston.errorLogger({
    transports: logger.transports,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

export default app;
