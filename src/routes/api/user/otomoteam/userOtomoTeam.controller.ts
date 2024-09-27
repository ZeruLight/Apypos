import { Request, Response } from "express";
import { encryptAndSend } from "../../../../services/crypto/encryptionHelpers";



export const otomoteamGet = (req: Request, res: Response) => {
  const data = {
    capacity: 1,
    otomo_team: [
      {
        index: 1,
        otomo_ids: ["OT_OTOMO_CHAR_ID_001"]
      }
    ],
    selected_index: 1
  };
  encryptAndSend(data, res, req);
};


export const otomoteamSet = (req: Request, res: Response) => {
  const data = {
    capacity: 1,
    otomo_team: req.body.otomo_teams,
    selected_index: 1
  };
  encryptAndSend(data, res, req);
};

export const otomoteamSelect = (req: Request, res: Response) => {
  const data = {
    selected_index: 1
  };
  encryptAndSend(data, res, req);
};