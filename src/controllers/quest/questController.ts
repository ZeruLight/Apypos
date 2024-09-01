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
  encryptAndSend(data, res,req);
};



export const islandMapAll = (req: Request, res: Response) => {
  const data = {
    ocean_list: [
      {
        mst_ocean_id: 3525753088,
        part_list: [
          {
            campaign: [
              {
                mst_campaign_id: 1,
                remain_time: 0
              }
            ],
            exploration_note: {
              note_contents: [{
                mst_note_content_id: 2030304811,
                state: 0
              }],
              progress: 0,
            },
            gingira_node_id: 2278830943,
            mst_part_id: 3815380063,
            node_list: [{
              day_quest_list: [
                { clear_time: 252, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 3104897802, quest_subtargets: [{ mst_subtarget_id: 1002, state: 0 }], state: 0 }
              ],
              is_node_collection: 0,
              mst_node_id: 517825253,
              mst_story_id: 3332266232,
              night_quest_list: [
                { clear_time: 252, is_collection_quest: 0, is_key_quest: 0, mst_quest_id: 3104897802, quest_subtargets: [{ mst_subtarget_id: 1002, state: 0 }], state: 0 }
              ],
              object_list: [{ mst_object_id: 3104897802, state: 0 }],
              raid_info: [{ end_remain: 252, mst_node_id: 517825253, start_remain: 252 }],
              silver_bonus: 0,
              state: 0

            }]
          }
        ]
      }
    ]
  };
  encryptAndSend(data, res,req);
};
