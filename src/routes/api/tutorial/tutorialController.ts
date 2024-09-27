import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import User from "../../../model/user";
import { updatePartNoteState } from "../story/storyController";
//TODO: implement all structs
// tutorialFlags
// 110 = is characterCreate
// 210 = isFirstTimeDownload
// 310 = isFirstTimeQuest //Jagi
// 1010 = isSecondTimeQuest  //Rathalos
// 2010 = isTrainingDL //weapon training
// 3010 = isStandardDL
// 4010 = isIslandQuestPlay //Menu
// 5010 = isIslandQuestEnd
// 0xFFFF = isTutorialEnd

//nyankenGo 3004
//nyankenEnd 3504
// To fudge set login to 310 then every time this is called increment up
//310 -> 1010 -> 2010

export const getTutorialFlag = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  const data = {
    flags: doc.tutorial_flags,
  };
  encryptAndSend(data, res, req);
};

export const nyankenList = async (req: Request, res: Response) => {
  const data = {
    questDataList: [
      {
        beginner_flag: 0,
        close: 0,
        currency_ammount: 0,
        currency_type: 0,
        discount_currency_ammount: 0,
        island_info: {
          area_info_list: [
            // {
            //   clear_num:0,
            //   last_reward_type:0,
            //   reward_id:0,
            //   reward_type:0,
            // }
          ],
          area_reward_list: [],
        },
        play_result: 0,
        prob_effect_value: 0,
        reward_times: 0,
        mst_banner_id: 6,
        mst_nyanken_id: 0,
        name: "name",
        open: 1,
        play_limit: 1,
        play_now: 0,
        quest_state: 0,
        quest_time: 1,
        sequence_no: 0,
        sort_key: 0,
        start: 0,
        time_display_flag: 0,
      },
    ],
  };
  encryptAndSend(data, res, req);
};

export const nyankenGo = async (req: Request, res: Response) => {
  const data = {
    currency_ammount: 1,
    discount_currency_ammount: 1,
    mst_nyanken_id: 1,
    rare_appear_time: 1,
    rare_flag: 1,
    return_time: 1,
    tutorial_step: 6010, //3504
  };
  encryptAndSend(data, res, req);
};

export const nyankenResult = async (req: Request, res: Response) => {
  const data = {
    effect_id: 1,
    is_island: 0,
    island_result: {
      normal_result_list: [],
      special_result_list: [],
    },
    tutorial_step: 6010, //3504
  };
  encryptAndSend(data, res, req);
};

export const TutorialFlagSet = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let newFlags = doc.tutorial_flags;
  req.body.flags.forEach((flag) => {
    newFlags.push(flag);
  });

  let update = { tutorial_flags: newFlags };
  doc = await User.findOneAndUpdate(filter, update, {
    new: true,
  });
  const data = {
    flags: doc.tutorial_flags,
  };

  encryptAndSend(data, res, req);
};

export const TutorialQuestStart = async (req: Request, res: Response) => {
  const data = {
    // For item drops to work 
    //block_list[1].block_instance_list needs a object with matching instance id to block_list[1].instance_id and serial_no to drop list and also pop_list
    //
    instance_data: {
      block_list: [
        {
          block_idx: 1,
          block_instance_list: [
            // { instance_id: 0, serial_no: 1 }
          ],
          drop_list: [
            {
              item_list: {
                collections: [],
                equipments: [],
                growth_items: [],
                limiteds: [],
                matatabis: [],
                materials: [],
                monument: {
                  augite: [],
                  hr: 0,
                  mlv: {
                    atk: 0,
                    def: 0,
                    hp: 0,
                    sp: 0,
                  },
                },
                otomos: [],
                partners: [],
                payments: [],
                pcoins: [],
                points: [],
                powers: [],
                stamp_sets: [],
                zenny: 100,
              },
              serial_no: 0,
            },
          ],
          instance_id: 0,
          is_insert: 0,
          is_raid: 0,
          mst_block_id: 35439225,
          repop_list: [
            // { amount: 0, serial_no: 0 }
          ],
        },
        {
          block_idx: 2,
          block_instance_list: [
            { instance_id: 1, serial_no: 1 }
          ],
          drop_list: [
            {
              item_list: {
                collections: [{mst_collection_id:484329504}],
                equipments: [],
                growth_items: [],
                limiteds: [],
                matatabis: [],
                materials: [],
                monument: {
                  augite: [],
                  hr: 0,
                  mlv: {
                    atk: 0,
                    def: 0,
                    hp: 0,
                    sp: 0,
                  },
                },
                otomos: [],
                partners: [],
                payments: [],
                pcoins: [],
                points: [],
                powers: [],
                stamp_sets: [],
                zenny: 100,
              },
              serial_no: 1,
            },
          ],
          instance_id: 1,
          is_insert: 0,
          is_raid: 0,
          mst_block_id: 4056617285,
          repop_list: [
             { amount: 1, serial_no: 1 }
          ],
        },
        {
          block_idx: 3,
          block_instance_list: [
            // { instance_id: 0, serial_no: 1 }
          ],
          drop_list: [
            {
              item_list: {
                collections: [],
                equipments: [],
                growth_items: [],
                limiteds: [],
                matatabis: [],
                materials: [],
                monument: {
                  augite: [],
                  hr: 0,
                  mlv: {
                    atk: 0,
                    def: 0,
                    hp: 0,
                    sp: 0,
                  },
                },
                otomos: [],
                partners: [],
                payments: [],
                pcoins: [],
                points: [],
                powers: [],
                stamp_sets: [],
                zenny: 100,
              },
              serial_no: 0,
            },
          ],
          instance_id: 0,
          is_insert: 0,
          is_raid: 0,
          mst_block_id: 1806235482,
          repop_list: [
            // { amount: 0, serial_no: 0 }
          ],
        },
      ],
      bomb_lot_num: [],
      bomb_lottery: [
        {
          bomb_id: 0,
          weight: 0,
        },
      ],
      enable_limited_skill_id_list: [],
      enable_partner_limited_skill_id_list: [],
      enable_talisman: 0,
      enable_talisman_partner: 0,
      enemy_point_list: [
        // {
        //   mst_enemy_id: 1618895799,
        //   point: 0,
        // }
      ],
      instance_id: 0,
      mission_message: "start",
      mst_quest_id: req.body.mst_quest_id ? req.body.mst_quest_id : 1778018296,
      multi_leave_check_time: 0,
      point_info: {
        armor_skill_value: 0,
        campaign_value: 0,
        get_point: 0,
        guild_bingo_bonus: 0,
        guild_total_point: 0,
        m16_get_point: 0,
        mst_event_info_id: 0,
        mst_event_point_id: 0,
        now_point: 0,
        total_point: 0,
      },
      power_up: 0,
      select_fix_equipment_idx: 0,
      subtargets: [
        // { instance_id: 0, mst_subtarget_id: 0 }
      ],
    },
  };
  console.log("Quest Request:", data.instance_data.mst_quest_id);

  encryptAndSend(data, res, req);
};

export const stepUP = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let update = { tutorial_step: doc.tutorial_step };
  switch (doc.tutorial_step) {
    case 110:
      update = { tutorial_step: 210 };
      break;
    case 210:
      update = { tutorial_step: 310 };
      break;
    case 310:
      update = { tutorial_step: 1010 };
      break;
    case 1010:
      update = { tutorial_step: 2010 };
      break;
    case 2010:
      update = { tutorial_step: 3010 };
      break;
    case 3010:
      update = { tutorial_step: 4010 };
      break;
    case 4010:
      update = { tutorial_step: 5010 };
      break;
    case 5010:
      update = { tutorial_step: 0xffff };
      break;
  }

  doc = await User.findOneAndUpdate(filter, update, {
    new: true,
  });

  const data = {
    tutorial_step: update.tutorial_step,
  };
  console.log(
    ` TutorialStepUp: Old: ${doc.tutorial_step} New: ${data.tutorial_step}`
  );

  encryptAndSend(data, res, req);
};

export const TutorialQuestEnd = async (req: Request, res: Response) => {

  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let update = { tutorial_step: 5010 ,ocean_list:doc.ocean_list };
  updatePartNoteState(doc.ocean_list,3525753088,3815380063,3758796689,2)
  doc = await User.findOneAndUpdate(filter, update, {
  new: true,
  });
  const data = {
    otomo_result: [
      {
        get_exp: 20,
        mst_otomo_id: 2092467563,
        otomo_id: "OT_OTOMO_CHAR_ID_001",
      },
    ],
    tutorial_rewards: {
      tutorial_normal_add: [
        {
          idx: 1,
          value: 1,
          item_list: {
            collections: [],
            equipments: [],
            growth_items: [],
            limiteds: [],
            matatabis: [],
            materials: [
              { amount: 1, mst_material_id: 1726002341 },
            ],
            monument: {
              augite: [],
              hr: 0,
              mlv: {
                atk: 0,
                def: 0,
                hp: 0,
                sp: 0,
              },
            },
            otomos: [],
            partners: [],
            payments: [],
            pcoins: [],
            points: [],
            powers: [],
            stamp_sets: [],
            zenny: 100,
          },
          
        },
        {
          idx: 2,
          value: 1,
          item_list: {
            collections: [],
            equipments: [],
            growth_items: [],
            limiteds: [],
            matatabis: [],
            materials: [
              { amount: 1, mst_material_id: 1714092880 },
            ],
            monument: {
              augite: [],
              hr: 0,
              mlv: {
                atk: 0,
                def: 0,
                hp: 0,
                sp: 0,
              },
            },
            otomos: [],
            partners: [],
            payments: [],
            pcoins: [],
            points: [],
            powers: [],
            stamp_sets: [],
            zenny: 100,
          },
          
        },
        {
          idx: 3,
          value: 1,
          item_list: {
            collections: [],
            equipments: [],
            growth_items: [],
            limiteds: [],
            matatabis: [],
            materials: [
              { amount: 1, mst_material_id: 1642667129 },
            ],
            monument: {
              augite: [],
              hr: 0,
              mlv: {
                atk: 0,
                def: 0,
                hp: 0,
                sp: 0,
              },
            },
            otomos: [],
            partners: [],
            payments: [],
            pcoins: [],
            points: [],
            powers: [],
            stamp_sets: [],
            zenny: 100,
          },
          
        },{
          idx: 4,
          value: 1,
          item_list: {
            collections: [],
            equipments: [],
            growth_items: [],
            limiteds: [],
            matatabis: [],
            materials: [
              { amount: 1, mst_material_id: 1714092880  },
            ],
            monument: {
              augite: [],
              hr: 0,
              mlv: {
                atk: 0,
                def: 0,
                hp: 0,
                sp: 0,
              },
            },
            otomos: [],
            partners: [],
            payments: [],
            pcoins: [],
            points: [],
            powers: [],
            stamp_sets: [],
            zenny: 100,
          },
          
        },
      ],
      tutorial_normal_reward: {
        item_list: {
          collections: [],
          equipments: [],
          growth_items: [],
          limiteds: [],
          matatabis: [],
          materials: [
            { amount: 1, mst_material_id: 1714092880 },
            { amount: 1, mst_material_id: 1642667129 },
            { amount: 1, mst_material_id: 1726002341 },
            { amount: 1, mst_material_id: 1714092880  },
          ],
          monument: {
            augite: [],
            hr: 0,
            mlv: {
              atk: 0,
              def: 0,
              hp: 0,
              sp: 0,
            },
          },
          otomos: [],
          partners: [],
          payments: [],
          pcoins: [],
          points: [],
          powers: [],
          stamp_sets: [],
          zenny: 100,
        },
      },
      tutorial_zeny: 100,
    },
    tutorial_step: doc.tutorial_step,
  };

  encryptAndSend(data, res, req);
};
