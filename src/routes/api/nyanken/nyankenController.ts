import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const progress = (req: Request, res: Response) => {
  const data = {
    balloon_color_id:0,
    currency_ammount:0,
    discount_currency_ammount:0,
    island_reward_times:0,
    message_leaving:"message_leaving",
    message_waiting:"message_waiting",
    mst_nyanken_id:0,
    nyanken_icon_id:0,
    prob_effect_value:0,
    rare_appear_time:0,
    rare_flag:0,
    return_time:0
  };
  encryptAndSend(data, res,req);
};

export const historyGet = (req: Request, res: Response) => {
  const data = {
    balloon_color_id:0,
    currency_ammount:0,
    discount_currency_ammount:0,
    island_reward_times:0,
    message_leaving:"message_leaving",
    message_waiting:"message_waiting",
    mst_nyanken_id:0,
    nyanken_icon_id:0,
    prob_effect_value:0,
    rare_appear_time:0,
    rare_flag:0,
    return_time:0
  };
  encryptAndSend(data, res,req);
};

export const QuestList = (req: Request, res: Response) => {

    const data = {
      questDataList: [
        {
          beginner_flag:0,
          close:0,
          currency_ammount:0,
          currency_type:0,
          discount_currency_ammount:0,
          island_info:{
            area_info_list:[
              // {
              //   clear_num:0,
              //   last_reward_type:0,
              //   reward_id:0,
              //   reward_type:0,
              // }
            ],
            area_reward_list:[],
          },
          play_result:0,
          prob_effect_value:0,
          reward_times:0,
          mst_banner_id:6,
          mst_nyanken_id:0,
          name:"name",
          open:1,
          play_limit:1,
          play_now:0,
          quest_state:0,
          quest_time:1,
          sequence_no:0,
          sort_key:0,
          start:0,
          time_display_flag:0
  
        }
      ],
    };
    encryptAndSend(data, res, req);
  };