import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const blankResponseEncrypted = (req: Request, res: Response) => {
    const data = {};
    console.log("Using blank response to go forward this could have unintended sideeffects")
    encryptAndSend(data, res);
};
export const blankResponse = (req: Request, res: Response) => {
    const data = {};
    console.log("Using blank response to go forward this could have unintended sideeffects")
    res.status(200).header('Content-Type', 'application/json').send(data);
};

