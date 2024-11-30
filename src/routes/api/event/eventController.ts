import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const infoGet = (req: Request, res: Response) => {
  const data = {
    beginner_node_id: [],
    event_info: [
      {
        accumulate_rewards: [
          // {
          //   is_clear: 0,
          //   item_list: {
          //     //items
          //   },
          //   reward_id: 0,
          //   str_id: 0,
          //   limit_enable: 0,
          //   other_item_list: {
          //     display: [
          //       // {
          //       //   amount:0,
          //       //   mst_display_id:0
          //       // }
          //     ],
          //     remain_time: 0,
          //     score: 0,
          //   },
          // },
        ],
        banner_id: 6002,
        bingo_point_multiplication: 0,
        close: 0,
        close_remain: 0,
        end: 0,
        end_remain: 0,
        event_type_id: 0,
        force_howto_reference_time: 0,
        fuel_karidama_recovery_value: 0,
        fuel_max_value: 0,
        fuel_recovery_karidama_amount: 0,
        guild_accumulate_rewards: [
          // {
          //   is_clear: 0,
          //   item_list: {
          //     //items
          //   },
          //   reward_id: 0,
          //   str_id: 0,
          //   limit_enable: 0,
          //   other_item_list: {
          //     display: [
          //       // {
          //       //   amount:0,
          //       //   mst_display_id:0
          //       // }
          //     ],
          //     remain_time: 0,
          //     score: 0,
          //   },
          // },
        ],
        guild_stretch_rewards: [
          // {
          //   is_clear: 0,
          //   item_list: {
          //     //items
          //   },
          //   reward_id: 0,
          //   str_id: 0,
          //   limit_enable: 0,
          //   other_item_list: {
          //     display: [
          //       // {
          //       //   amount:0,
          //       //   mst_display_id:0
          //       // }
          //     ],
          //     remain_time: 0,
          //     score: 0,
          //   },
          // },
        ],
        guild_stretch_total_point: 0,
        is_guild_event: 0,
        loop_random_rewards: {
          interval: 0,
          next_random_reward: {
            next_score: 0,
          },
          random_reward_table: [
            // {
            //   item_list:{},
            //   reward_id:0
            //   str_id:0
            // }
          ],
        },
        loop_rewards: {
          interval: 0,
          loop_reward_table: [
            // {
            //   item_list:{},
            //   reward_id:0
            // }
          ],
          next_loop_reward: {
            next_score: 0,
            reward_id: 0,
          },
        },
        loop_start_value: 0,
        m16_meta_normal_node_id: 0,
        mst_event_info_id: 0,
        mst_event_point_id: 0,
        mst_event_shop_id: 0,
        mst_power_id: 0,
        name: "EventName",
        now_fuel: 0,
        open: 0,
        open_remain: 0,
        opening_mst_drama_id: 0,
        part_extend_ids: [],
        quest_extend_ids: [],
        recovery_fuel_second: 0,
        remain_fuel_full: 0,
        start: 0,
        start_remain: 0,
        target_event_node_infos: [], //numbers
        target_forest_quest_id: 0,
        target_lottery_id: 0,
        target_part_infos: [],
        target_score_node_infos: [],
        total_guild_point: 0,
        total_point: 0,
      },
    ],
    total_event_point_info: [
      // {
      //   amount: 0,
      //   mst_event_point_id: 0,
      // },
    ],
  };
  encryptAndSend(data, res, req);
};

export const limitedskillGet = (req: Request, res: Response) => {
  const data = {
    limited_skill_excl_ev_infos: [],
    limited_skill_infos: [],
  };
  encryptAndSend(data, res, req);
};
