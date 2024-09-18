import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import User from "../../../model/user";
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
  const data = {
    otomo_result: [
      // {
      //   get_exp:0,
      //   mst_otomo_subskill_id:0,
      //   otomo_id:0
      // }
    ],
    tutorial_rewards: {
      tutorial_normal_add: [
        {
          idx: 0,
          item_list: {
            equipments: [
              {
                auto_potential_composite: 1,
                awaked: 0,
                created: 1,
                elv: 1,
                endAwakeCount: 5,
                endAwakeRemain: 10,
                end_remain: 15,
                equipment_id: "AD_BODY006",
                evolve_start_time: 1609459200,
                favorite: 1,
                is_awake: 0,
                is_complete_auto_potential_composite: 1,
                mst_equipment_id: 1801022340,
                potential: 100,
                slv: 1,
                start_remain: 20,
              },
            ],
            zenny: 100,
          },
        },
      ],
      tutorial_normal_reward: {
        item_list: {
          equipments: [
            {
              auto_potential_composite: 1,
              awaked: 0,
              created: 1,
              elv: 1,
              endAwakeCount: 5,
              endAwakeRemain: 10,
              end_remain: 15,
              equipment_id: "AD_BODY006",
              evolve_start_time: 1609459200,
              favorite: 1,
              is_awake: 0,
              is_complete_auto_potential_composite: 1,
              mst_equipment_id: 1801022340,
              potential: 100,
              slv: 1,
              start_remain: 20,
            },
          ],
          zenny: 100,
        },
      },
      tutorial_zeny: 100,
      tutorial_step: 4010,
    },
  };

  encryptAndSend(data, res, req);
};
