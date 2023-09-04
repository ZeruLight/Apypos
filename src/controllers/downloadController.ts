import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
//File,hash?,sizeInBytes
//TODO: implement all structs
export const openingDL = (req: Request, res: Response) => {
  const data = "/test/test,,1000\n";
  res.status(200).header('Content-Type', 'application/json').send(data);
};

export const tutorialDL = (req: Request, res: Response) => {
  const data = "/test/test,,0\n";

  res.status(200).header('Content-Type', 'application/json').send(data);
};

export const trainingDL = (req: Request, res: Response) => {
  const data = "/test/test,,0\n";

  res.status(200).header('Content-Type', 'application/json').send(data);
};




