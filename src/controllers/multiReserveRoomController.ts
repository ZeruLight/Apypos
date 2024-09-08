import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const roomReserveJoin = (req: Request, res: Response) => {
  const data = {
    rooms:{
      _id:0,
      auto_flag:0,
      created:0,
      host_id:"123",
      hose_name:"name",
      is_locked:0,
      kick:0,
      member_count:0,
      members:[],
      name:"",
      phase:0,
      quest_id:0,
      quick_match:0,
      reserve_members:[],
      restart:0,
      room_id:0,
      server_url:"http://192.168.1.203",
      tag:0,
      type:0
    }
  };
  encryptAndSend(data, res,req);
};
