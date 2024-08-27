import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getEquipment = (req: Request, res: Response) => {
  const data = {
    mst_equipment_ids: [],//some hash that gets compared sBookWorkspace::compareServerBookData
  };
  encryptAndSend(data, res);
};
