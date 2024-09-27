import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import User from "../../../model/user";

export const questProgress = (req: Request, res: Response) => {
  const data = {
    continue_num: 0,
    is_16multi: 0,
    is_multi_play: 0,
    is_progress: 0,
    mst_quest_id: 0,
    quest_instance_id: 0,
    result_step: 0,
  };
  encryptAndSend(data, res, req);
};

export const questResultEnd = (req: Request, res: Response) => {
  const data = {};
  encryptAndSend(data, res, req);
};

export const eventTicketFree = (req: Request, res: Response) => {
  const data = {
    infos: [],
    quests: [],
  };
  encryptAndSend(data, res, req);
};
export const eventListAll = (req: Request, res: Response) => {
  const data = {
    big_node_order_array: [{ big_node_id: 2374006206 }],
    event_list: {
      assault: [
        {
          appear_remain: 0,
          big_node_banner_id: 7061,
          disappear_remain: 0,
          end_remain: 3600,
          is_user_cleartime_ranking: 0,
          middle_node_banner_id: 7061,
          mst_event_node_id: 2374006206,
          quest_list: [
            {
              clear_time: 0,
              limited_amount: 0,
              mst_limited_id: 1436577172,
              mst_quest_id: 268132675,
              quest_subtargets: [],
              state: 0,
            },
          ],
          recommended_flag: 1,
          schedule_category: 1,
          schedule_type: 1,
          start_remain: 0,
          state: 0,
        },
      ],
      m16: [],
      score: [],
      standing: [],
      ticket: [],
      tour: [],
    },
    next_day_start: 0,
    next_latest_node_infos: {
      beginner_node_id: 2278830943,
      hard_polar_node_id: 2278830943,
      kari_polar_node_id: 2278830943,
      new_multi_node_id: 2278830943,
      normal_polar_node_id: 2278830943,
    },
    now_latest_node_info_remain: 36000,
    now_latest_node_infos: {
      beginner_node_id: 2278830943,
      hard_polar_node_id: 2278830943,
      kari_polar_node_id: 2278830943,
      new_multi_node_id: 2278830943,
      normal_polar_node_id: 2278830943,
    },
  };
  encryptAndSend(data, res, req);
};

export const eternalAll = (req: Request, res: Response) => {
  const data = {
    banner_path: "coev_04480",
    eternal_collection_list: [
      {
        mst_collection_id: 2416931437,
        state: 1,
      },
    ],
    eternal_nodes: [
      {
        banner_path: "coev_04480",
        eternal_quest_list: [
          {
            clear_time: 0,
            idx: 0,
            is_collection_quest: 0,
            is_enable: 0,
            mst_quest_id: 2002926758,
            quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }],
            state: 0,
          },
        ],
        mst_eternal_node_id: 517825253,
      },
    ],
  };
  encryptAndSend(data, res, req);
};

export const islandStart = (req: Request, res: Response) => {
  const data = {
    instance_data: {
      block_list: [
        {
          block_idx: 1,
          block_instance_list: [{ instance_id: 0, serial_no: 1 }],
          drop_list: [
            //   {
            //    item_list: {
            //   },
            //   serial_no: 0
            // }
          ],
          instance_id: 0,
          is_insert: 0,
          is_raid: 0,
          mst_block_id: 453505848,
          repop_list: [{ amount: 0, serial_no: 0 }],
        },
      ],
      bomb_lot_no: [
        {
          bomb_lottery: [{ bomb_id: 0, weight: 0 }],
        },
      ],
      enable_limited_skill_id_list: [],
      enable_partner_limited_skill_id_list: [],
      enable_talisman: 0,
      enable_talisman_partner: 0,
      enemy_point_list: [
        {
          mst_enemy_id: 1618895799,
          point: 0,
        },
      ],
      instance_id: 0,
      mission_message: "start",
      mst_quest_id: req.body.mst_quest_id,
      multi_leave_check_time: 0,
      point_info: {
        armor_skill_value: 0,
        campaign_value: 0,
        get_point: 0,
        guild_bingo_bonus: 0,
        guild_total_point: 0,
        m16_get_point: 0,
        mst_event_info_id: 2740334662,
        mst_event_point_id: 2992123464,
        now_point: 0,
        total_point: 0,
      },
      power_up: 0,
      select_fix_equipment_idx: 0,
      subtargets: [{ instance_id: 0, mst_subtarget_id: 0 }],
    },
  };
  encryptAndSend(data, res, req);
};

export const islandEnd = (req: Request, res: Response) => {
  const data = {
    //TODO: NOT CORRECT!
    advance_bingo_mission_ids: [],
    campaign_info: [],
    clear_bingo_mission_ids: [],
    clear_subtarget_ids: [],
    final_reward_info: {
      multiplier: 0,
      value: 0,
    },
    get_accum_reward_ids: [],
    get_guild_accum_reward_ids: [],
    get_loop_random_reward_ids: [],
    get_loop_reward_ids: [],
    get_mst_otomo_id: 0,
    get_mst_partner_id: 0,
    increase_value: 0,
    is_pop_not_enough_zeny: 0,
    katamari_content_list: [],
    max_potential_equipments: [],
    mst_part_id: 0,
    open_list: {
      open_node: [],
      open_ocean: [],
      open_part: [],
    },
    otomo_result: [],
    partner_cap_list: [],
    pop_list: [],
    ranking_num: 0,
    rewards: {
      bingo_reward: {
        //item_list
      },
      break_drop_reward: {
        //item_list
      },
      break_reward: {
        //item_list
      },
      gold_reward: {
        //item_list
      },
      luck_value: 0,
      luck_reward: {},
      other_list_add: [],
      pick_reward: {
        //item_list
      },
      // lucky_reward: {
      //   //item_list
      // },
      // multi_reward: {
      //   //item_list
      // },

      // normal_reward: {
      //   add_list: {
      //     line2: {
      //       is_open: 0,
      //       other_list: [],
      //       price: 0,
      //     },
      //     line3: {
      //       is_open: 0,
      //       other_list: [],
      //       price: 0,
      //     },
      //   },
      //   other_list_add: [],
      // },
      // pick_reward: {
      //   //item_list
      // },
      // point_info: {
      //   armor_skill_value: 0,
      //   campaign_value: 0,
      //   get_point: 0,
      //   guild_bingo_bonus: 0,
      //   guild_total_point: 0,
      //   m16_get_point: 0,
      //   mst_event_info_id: 0,
      //   mst_event_point_id: 0,
      //   now_point: 0,
      //   total_point: 0,
      // },
      // raid_reward: {
      //   //item_list
      // },
      // score_enemy_list: [],
      // upper_luck_value: 0,
      zenny: 500,
    },
    zenny: 500,

    view_collection_list: [],
  };
  encryptAndSend(data, res, req);
};

export const islandMapAll = async (req: Request, res: Response) => {
  // Use Ocean Hash to find Part Hashs.
  // Use Part Hash to find Node Hashs
  // Use Part Hash to find Drama Hashs
  // Use Drama Hash to find Story Hashs
  /*
3525753088 マラクジャ群島 Malacuja 
----------------------------------
Parts:
3815380063 マラクジャ島 Malacuja Island
|--------------------------------------
|Nodes:
|517825253 港町セビチェ port city of Ceviche PART00001_NODE00001
||No Quests...
|2278830943 アドポの丘                       PART00001_NODE00002
||mQuestList
|||538553008
|||3104897802
|||3457665948
|||1349738047
|||661941929
|||3195879187
|||3380219781
|||1506087444
||mSubjugationQuestList
|||784474754
|||1308994407

|4040360905 パクペバ大裂溝前
|1857525354 ローゼル渓流
|431007484 トララ川のほとり
|2159671110 ヒスコア湿地帯
|4156475344 ピアウ海岸

2053326309 ランバイ島 Lambay
224687475
2466308304
3825717318
2098102780


1261430970 ヴォルヒール群島 Volhir
----------------------------------
Parts:
168407402
2595663099
3987840109
2373326216
4201719070
1668838564

1009309740 タブラディン群島 Tabradin 
----------------------------------
Parts:
343884850
2317078929
4246528263
1679143101
319979563
2209193402
*/
  const filter = { current_session: req.body.session_id };

  const doc = await User.findOne(filter);
  const data = { ocean_list: doc.ocean_list };
  const data2 = {
    //TODO: Write logic to see what oceans and islands are open
    ocean_list: [
      //These can be found at ocean_define.xml //only 3 ids 3525753088,1261430970,1009309740
      {
        mst_ocean_id: 3525753088, //マラクジャ群島 Malacuja
        part_list: [
          {
            campaign: [
              {
                mst_campaign_id: 2374006206,
                remain_time: 3600,
              },
            ],
            exploration_note: {
              note_contents: [
                // Artifact State 0/1 = ? 2 = Newly Discoverd (will do a big opening) 3 = Discoverd
                {
                  mst_note_content_id: 2030304811,
                  state: 3,
                },
                {
                  mst_note_content_id: 3758796689,
                  state: 3,
                },
                {
                  mst_note_content_id: 2534252295,
                  state: 3,
                },
                {
                  mst_note_content_id: 157878948,
                  state: 3,
                },
                {
                  mst_note_content_id: 2121153074,
                  state: 3,
                },
              ],
              progress: 50,
            },
            gingira_node_id: 4156475344, //unk value here if you put node id in here is sparkles
            mst_part_id: 3815380063, //マラクジャ島 Malacuja Island
            node_list: [
              {
                day_quest_list: [],
                is_collection_node: 0, // if set to 1 adds ? Discovery
                mst_node_id: 517825253,
                mst_story_id: 1603733826,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [
                  {
                    clear_time: 1,
                    is_collection_quest: 0,
                    is_key_quest: 1,
                    mst_quest_id: 538553008,
                    quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }],
                    state: 3, //0 =? 1 = New 2= ? 3= Clear (S A B C based on clear_time)
                  },
                ],
                is_collection_node: 0,
                mst_node_id: 2278830943,
                mst_story_id: 0,
                night_quest_list: [
                  {
                    clear_time: 0,
                    is_collection_quest: 0,
                    is_key_quest: 0,
                    mst_quest_id: 1506087444,
                    quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }],
                    state: 1,
                  },
                ],
                state: 1, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [],
                is_collection_node: 0,
                mst_node_id: 4040360905, //パクペバ大裂溝前
                mst_story_id: 4104665722,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [],
                is_collection_node: 0,
                mst_node_id: 1857525354, //ローゼル渓流
                mst_story_id: 0,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [],
                is_collection_node: 0,
                mst_node_id: 431007484, //トララ川のほとり
                mst_story_id: 1839295424,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [],
                is_collection_node: 0,
                mst_node_id: 2159671110, //ヒスコア湿地帯
                mst_story_id: 0,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
              {
                day_quest_list: [],
                is_collection_node: 0,
                mst_node_id: 4156475344, //ピアウ海岸
                mst_story_id: 3332266232,
                night_quest_list: [],
                state: 0, //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Additional ! 6 = Help!
              },
            ],
            object_list: [{ mst_object_id: 1, state: 1 }],
            raid_info: [
              // { end_remain: 3600, mst_node_id: 1857525354, start_remain: 0 }, // Will put Monster sign above node and put "An intruding monster appears 59 mins"
            ],
            silver_bonus: 50,
            state: 1, //1= Open 0= Closed
          },
        ],
      },
      {
        mst_ocean_id: 1261430970, //ヴォルヒール群島 Volhir
        part_list: [],
      },
      {
        mst_ocean_id: 1009309740, //タブラディン群島 Tabradin
        part_list: [],
      },
    ],
  };

  encryptAndSend(data, res, req);
};
