import express from "express";
import routes from "./routes/routes";
import expressWinston from "express-winston";
import { logger } from "./middleware/logger";
import winston from "winston";
import http from "http";
import {Server}  from "socket.io";

import { decryptAndParse } from "./services/crypto/encryptionHelpers";
const app = express();
const server = http.createServer(app);
const io = new Server(server); // Attach socket.io to the server




// Middleware configurations
app.use(express.json());

// Middleware to capture raw data from 'application/octet-stream' content type
app.use((req, res, next) => {
  console.log(req.url)
  if (req.is("application/octet-stream")) {
    let data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const rawBody = Buffer.concat(data);
      const decryptedBody = decryptAndParse(rawBody);
      req.body = decryptedBody;

      // Log directly here for debugging
      console.log("Decrypted Request Body:", JSON.stringify(req.body, null, '\t') );

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

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf((info) => {
        if (info.meta && info.meta.req && info.meta.res) {
          const { req, res } = info.meta;
          
          let log = "---------------------------------\n";
          log += `Request: ${JSON.stringify(req)} | Response: ${JSON.stringify(
            res,
          )}\n`;
          return log;
        }
        return info.message;
      }),
    ),
    meta: true,
    expressFormat: true,
    colorize: true,
    dynamicMeta: (req, res) => {
      return {
        body: req.body,
      };
    },
  }),
);

// Setup routes
app.use("/", routes);
app.use(express.static("src\\public"));

// Error logger middleware
app.use(
  expressWinston.errorLogger({
    transports: logger.transports,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
    ),
  }),
);

export { app,io}
