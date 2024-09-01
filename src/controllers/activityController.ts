import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const activityGet = (req: Request, res: Response) => {
  const data = {
    limit:req.body.limit,
    user_id:"user_id"
  };
  encryptAndSend(data, res,req);
};
