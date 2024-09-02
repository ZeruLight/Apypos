import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const karidamaInfo = (req: Request, res: Response) => {
  const data = {
    karidama_shop_infos:[
      {
        end_remain:1,
        mst_karidama_shop_id:1,
        name:"test",
        start_remain:1
      }
    ]
  };
  encryptAndSend(data, res,req);
};
export const info = (req: Request, res: Response) => {
  const data = {
    high_upper_shop_info:{
      end_remain:0,
      mst_event_point_id:0,
      mst_shop_id:1,
      name:"",
      start_remain:0,
    },
    low_upper_shop_info:{
      end_remain:0,
      mst_event_point_id:0,
      mst_shop_id:1,
      name:"",
      start_remain:0,
    },
    shop_infos:[{
      end_remain:0,
      mst_event_point_id:0,
      mst_shop_id:1,
      name:"",
      start_remain:0,
    }]
  };
  encryptAndSend(data, res,req);
};