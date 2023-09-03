import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const questProgress = (req: Request, res: Response) => {
  const data = {
    continue_num: 3,
    is_16multi: 0,
    is_multi_play: 0,
    is_progress: 0,
    mst_quest_id: 0,
    quest_instance_id: 0,
    result_step: 0,
  };
  encryptAndSend(data, res);
};

export const questForestProgress = (req: Request, res: Response) => {
  const data = {
    instance_id: 1,
    mst_event_info_id: 1,
    playing_node_info: {
      mst_forest_node_id: 1,
      mst_forest_quest_id: 1,
    },
    progress: 0,
  };
  encryptAndSend(data, res);
};

export const questForestEnd = (req: Request, res: Response) => {
  const data = {
    boost_point_magnification: 0,
    boost_type: 0,
    campaign_value: 0,
    enemy_point: 0,
    equip_skill_magnification: 0,
    event_item_skill_magnification: 0,
    event_point_id: 0,
    forest_equip_skill_magnification: 0,
    is_complete_forest: 0,
    mst_event_info_id: 0,
    new_open_forest_node_id_list: [],
    new_open_forest_quest_id_list: [],
    now_fuel: 0,
    pop_list: [],
  };
  encryptAndSend(data, res);
};
