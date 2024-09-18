import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const karidamaInfo = (req: Request, res: Response) => {
  const data = {
    karidama_shop_infos:[
      {
        end_remain:1,
        mst_karidama_shop_id:1,
        name:"karidama_shop",
        start_remain:1
      }
    ]
  };
  encryptAndSend(data, res,req);
};

export const karidamaList = (req: Request, res: Response) => {
  const data = {
    karidama_shop_items:[],
    type_list:[]
  };
  encryptAndSend(data, res,req);
};

export const info = (req: Request, res: Response) => {
  const data = {
    high_upper_shop_info:{
      end_remain:200,
      mst_event_point_id:3190222199,
      mst_shop_id:1,
      name:"test1",
      start_remain:200,
    },
    low_upper_shop_info:{
      end_remain:200,
      mst_event_point_id:3190222199,
      mst_shop_id:2,
      name:"test2",
      start_remain:200,
    },
    shop_infos:[{
      end_remain:200,
      mst_event_point_id:3190222199,
      mst_shop_id:3,
      name:"test3",
      start_remain:200,
    }]
  };
  encryptAndSend(data, res,req);
};



export const list = (req: Request, res: Response) => {
  const data = {
    high_upper_shop_items:[],
    low_upper_shop_items:[],
    shop_items:[]
  };
  encryptAndSend(data, res,req);
};