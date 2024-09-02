import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const infoGet = (req: Request, res: Response) => {
  const data = {
    beginner_node_id:[1322605556],
    event_info:[],
    total_event_point_info:[]
  };
  encryptAndSend(data, res,req);
};