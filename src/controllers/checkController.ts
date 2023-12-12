import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const nothing = (req: Request, res: Response) => {
  const data = {
    game_id: "09.03.06", //CheckAppVer unsure on what its checking
  };
  encryptAndSend(data, res);
};
