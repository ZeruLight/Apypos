import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import User from "../model/user";
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
    paidQuestDataList: [],
    questDataList: [],
  };
  encryptAndSend(data, res, req);
};

export const nyankenGo = async (req: Request, res: Response) => {

  const data = {
    currency_ammount: 20,
    discount_currency_ammount: 0,
    mst_nyanken_id: 0,
    rare_appear_time: 0,
    rare_flag: 0,
    return_time: 0,
    tutorial_step: 3004 //3504
  };
  encryptAndSend(data, res, req);
};

export const TutorialFlagSet = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let newFlags = doc.tutorial_flags;
  req.body.flags.forEach((flag) => {
    newFlags.push(flag)
  })

  let update = { tutorial_flags: newFlags };
  doc = await User.findOneAndUpdate(filter, update, {
    new: true
  });
  const data = {
    flags: doc.tutorial_flags,
  };


  encryptAndSend(data, res, req);
};


export const TutorialQuestStart = async (req: Request, res: Response) => {

  const data = {
    instance_data: {
      block_list: [
        {
          block_idx: 1,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        }, {
          block_idx: 2,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          mst_block_id: 4066661901,
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        }, {
          block_idx: 3,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          mst_block_id: 35439225,
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        },{
          block_idx: 4,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          mst_block_id: 110214859,
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        },{
          block_idx: 5,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          mst_block_id: 1939726522,
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        },{
          block_idx: 6,
          block_instance_list: [
            { instance_id: 0, serial_no: 1 }
          ],
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
          mst_block_id: 2223550679,
          repop_list: [
            { amount: 0, serial_no: 0 }
          ]
        },

      ],
      bomb_lot_no: [{
        bomb_lottery: [
          { bomb_id: 0, weight: 0 }
        ]
      }],
      enable_limited_skill_id_list: [],
      enable_partner_limited_skill_id_list: [],
      enable_talisman: 0,
      enable_talisman_partner: 0,
      enemy_point_list: [
        {
          mst_enemy_id: 1618895799,
          point: 0,
        }
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
      subtargets: [{ instance_id: 0, mst_subtarget_id: 0 }]
    }

  };


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
      update = { tutorial_step: 0xFFFF };
      break;

  }


  doc = await User.findOneAndUpdate(filter, update, {
    new: true
  });

  const data = {
    tutorial_step: update.tutorial_step,
  };
  console.log(` TutorialStepUp: Old: ${doc.tutorial_step} New: ${data.tutorial_step}`);

  encryptAndSend(data, res, req);
};





export const TutorialQuestEnd = async (req: Request, res: Response) => {

  const data = {
    otomo_result: [],
    tutorial_rewards: {
      tutorial_normal_add: [{
        item_list: {
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_SWORD002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 4002688025,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ]
        }
      }],
      tutorial_normal_reward: {
        item_list: {
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_SWORD002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 4002688025,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ]
        }
      },
      tutorial_zeny: 100,
      tutorial_step: 5010
    }
  };

  encryptAndSend(data, res, req);
};
