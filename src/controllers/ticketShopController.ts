import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const list = (req: Request, res: Response) => {
  const data = {
    ticket_list:[
      {
        buy_enabled:0,
        currency_type:0,
        mst_limited_id:0,
        pop_text:"",
        price:0,
        stock:1
      }
    ]
  };
  encryptAndSend(data, res);
};
