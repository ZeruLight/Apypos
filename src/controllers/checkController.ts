import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const nothing = (req: Request, res: Response) => {
  const data = {
    game_id: "83R552F3", //sServer::setupCheckAppVer(cMHiJessicaAPIResponseBase *)	.text	0000000001909B20	
  };
  encryptAndSend(data, res);
};
