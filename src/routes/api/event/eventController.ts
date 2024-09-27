import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const infoGet = (req: Request, res: Response) => {
  const data = {
    beginner_node_id:[833445410,443774594],
    event_info:[],
    total_event_point_info:[]
  };
  encryptAndSend(data, res,req);
};

export const limitedskillGet = (req: Request, res: Response) => {
  const data = {
    limited_skill_excl_ev_infos:[],
    limited_skill_infos:[],
  };
  encryptAndSend(data, res,req);
};