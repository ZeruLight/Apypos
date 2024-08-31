import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const activityGet = (req: Request, res: Response) => {
  const data = {
    limit:0,
    user_id:"user_id"
  };
  encryptAndSend(data, res);
};
