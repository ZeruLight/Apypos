import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const openingDL = (req: Request, res: Response) => {
  const data = "/test/test,test2";
  res.status(200).header('Content-Type', 'application/json').send(data);
};

export const tutorialDL = (req: Request, res: Response) => {
  const data = "/test/test,test2";

  res.status(200).header('Content-Type', 'application/json').send(data);
};

export const trainingDL = (req: Request, res: Response) => {
  const data = "/test/test,test2";

  res.status(200).header('Content-Type', 'application/json').send(data);
};


export const test = (req: Request, res: Response) => {
  const data = "/test/test,test2";

  res.status(200).header('Content-Type', 'application/json').send(data);
};

