import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const progress = (req: Request, res: Response) => {
  const data = {
    balloon_color_id:1,
    currency_ammount:0,
    discount_currency_ammount:0,
    island_reward_times:0,
    message_leaving:"test",
    message_waiting:"test",
    mst_nyanken_id:0,
    nyanken_icon_id:0,
    prob_effect_value:0,
    rare_appear_time:0,
    rare_flag:0,
    return_time:0
  };
  encryptAndSend(data, res);
};

export const historyGet = (req: Request, res: Response) => {
  const data = {
    balloon_color_id:0,
    currency_ammount:0,
    discount_currency_ammount:0,
    island_reward_times:0,
    message_leaving:"",
    message_waiting:"",
    mst_nyanken_id:0,
    nyanken_icon_id:0,
    prob_effect_value:0,
    rare_appear_time:0,
    rare_flag:0,
    return_time:0
  };
  encryptAndSend(data, res);
};
