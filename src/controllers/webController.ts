import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

const isValidWebContentRequest = (query: any): boolean => {
  return query.login_id === "" && query.sec_id === "" && query.device_id === "2";
};

export const getWebContent = (req: Request, res: Response) => {
  if (isValidWebContentRequest(req.query)) {
    const data = {
      test: "content"
    };
    encryptAndSend(data, res);
  } else {
    res.status(404).send('Not Found');
  }
};
