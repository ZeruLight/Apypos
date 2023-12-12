import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getEquipment = (req: Request, res: Response) => {
  const data = {
    mst_equipment_ids: [3325982510,1801022340,3353202438,69277598,2006810019,62957325,2006810019,3229325580],
  };
  encryptAndSend(data, res);
};
