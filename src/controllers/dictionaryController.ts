import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getEquipment = (req: Request, res: Response) => {
  console.log(req.body)

  const data = {
    mst_equipment_ids: [1, 2, 3, 4, 5],
  };
  encryptAndSend(data, res);
};
