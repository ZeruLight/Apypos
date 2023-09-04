import express from "express";
import routes from "./routes";
import expressWinston from "express-winston";
import { logger } from "./logger";
import winston from "winston";
import { decryptAndParse } from "./services/crypto/encryptionHelpers";

const app = express();

// Middleware to capture raw data from 'application/octet-stream' content type
app.use((req, res, next) => {
  if (req.is("application/octet-stream")) {
    let data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const rawBody = Buffer.concat(data);
      const decryptedBody = decryptAndParse(rawBody);
      req.body = decryptedBody;
      next();
    });

    req.on("error", (err) => {
      console.error("Error processing raw request:", err);
      next(err);
    });
  } else {
    next();
  }
});

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
          let log = "---------------------------------\n";
          log += `Request: ${JSON.stringify(req)} | Response: ${
            res.statusCode
          } ${responseTime}ms\n`;
          if (req.body) {
            log += ` | Raw Body: ${req.body.toString("hex")}`;
          }
          return log;
        }
        return info.message;
      })
    ),
    meta: true,
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
