import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const nothing = (req: Request, res: Response) => {
  const data = {
    "game_id": "1",
  };
  encryptAndSend(data, res);
};

