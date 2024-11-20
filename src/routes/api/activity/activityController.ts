import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const activityGet = (req: Request, res: Response) => {
  const data = {
    activities:[{
      created:2,
      mst_activity_id:2,
      mst_activity_type_id:4, //changes color
      text:"Activity Text",
      user_id:""
    }]
  };
  encryptAndSend(data, res,req);
};
