import { Request, Response } from "express";
import { encryptAndSend } from "../../services/crypto/encryptionHelpers";

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

export const eventTicketFree = (req: Request, res: Response) => {
  const data = {
   infos:[],
   quests:[]
  };
  encryptAndSend(data, res, req);
};
export const eventListAll = (req: Request, res: Response) => {
  const data = {
    big_node_order_array:[],
    event_list:{
      assault:[],
      m16:[],
      score:[],
      standing:[],
      ticket:[],
      tour:[]
    },
    next_day_start:0,
    next_latest_node_infos:{
      beginner_node_id:0,
      hard_polar_node_id:0,
      kari_polar_node_id:0,
      new_multi_node_id:0,
      normal_polar_node_id:0
    },
    now_latest_node_info_remain:0,
    now_latest_node_infos:{
      beginner_node_id:0,
      hard_polar_node_id:0,
      kari_polar_node_id:0,
      new_multi_node_id:0,
      normal_polar_node_id:0
    }
  };
  encryptAndSend(data, res, req);
};

export const eternalAll = (req: Request, res: Response) => {
  const data = {
    banner_path: "coev_04480",
    eternal_collection_list: [{
      mst_collection_id: 2416931437,
      state: 1,
    }],
    eternal_nodes: [{
      banner_path: "coev_04480",
      eternal_quest_list: [{
        clear_time: 0,
        idx: 0,
        is_collection_quest: 0,
        is_enable: 0,
        mst_quest_id: 2002926758,
        quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }],
        state: 0
      }
      ],
      mst_eternal_node_id: 517825253
    }]
  };
  encryptAndSend(data, res, req);
};



export const islandMapAll = (req: Request, res: Response) => {
  const data = {
    ocean_list: [
      {
        mst_ocean_id: 3525753088,
        part_list: [
          {
            campaign: [
              // {
              //   mst_campaign_id: 1,
              //   remain_time: 33
              // }
            ],
            exploration_note: {
              note_contents: [
                //   {
                //   mst_note_content_id: 2030304811,
                //   state: 1
                // }
              ],
              progress: 100,
            },
            gingira_node_id: 1,
            mst_part_id: 3815380063,
            node_list: [
              {
                day_quest_list: [
                  // { clear_time: 0, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 538553008, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 },
                  // { clear_time: 0, is_collection_quest: 0, is_key_quest: 1, mst_quest_id: 3104897802, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 }

                ],
                is_node_collection: 1,
                mst_node_id: 517825253,
                mst_story_id: 1603733826,
                night_quest_list: [
                  // { clear_time: 0, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 3457665948, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 },
                  // { clear_time: 0, is_collection_quest: 0, is_key_quest: 1, mst_quest_id: 1349738047, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 }

                ],
                object_list: [
                  // { mst_object_id: 3104897802, state: 1 }
                ],
                raid_info: [
                  // { end_remain: 252, mst_node_id: 517825253, start_remain: 252 }
                ],
                silver_bonus: 3,
                state: 1

              },
              // {
              //   day_quest_list: [
              //     // { clear_time: 0, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 538553008, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 },
              //     // { clear_time: 0, is_collection_quest: 0, is_key_quest: 1, mst_quest_id: 3104897802, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 }

              //   ],
              //   is_node_collection: 0,
              //   mst_node_id: 2278830943,
              //   mst_story_id: 3332266232,
              //   night_quest_list: [
              //     // { clear_time: 0, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 3457665948, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 },
              //     // { clear_time: 0, is_collection_quest: 0, is_key_quest: 1, mst_quest_id: 1349738047, quest_subtargets: [{ mst_subtarget_id: 1002, state: 1 }], state: 1 }

              //   ],
              //   object_list: [
              //     // { mst_object_id: 3104897802, state: 1 }
              //   ],
              //   raid_info: [
              //     // { end_remain: 252, mst_node_id: 517825253, start_remain: 252 }
              //   ],
              //   silver_bonus: 0,
              //   state: 0

              // }


            ]
          }
        ]
      },

    ]
  };
  encryptAndSend(data, res, req);
};
