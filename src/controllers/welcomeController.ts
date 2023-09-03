import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getSafetyFlag = (req: Request, res: Response) => {
  const data = {
    flag: 0,
  };
  encryptAndSend(data, res);
};
