import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import { calcMstId } from "../../../services/defineService";

export const trainingEnd = (req: Request, res: Response) => {
  const data = {
    mst_quest_id: 1749033009,
    pop_list: [
      {
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
              mst_equipment_id: calcMstId("WD_SWORD002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        pop_id: 1,
      },
    ],
  };
  encryptAndSend(data, res, req);
};

export const trainingStart = (req: Request, res: Response) => {
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
          mst_block_id: calcMstId("l00_m08_a01_0101"),
          repop_list: [{ amount: 0, serial_no: 0 }],
        },
        {
          block_idx: 2,
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
          mst_block_id: calcMstId("l00_m08_a01_0102"),
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

export const trainingList = (req: Request, res: Response) => {
  //TODO implement state for is_clear
  const data = {
    training_list: [
      {
        equip_type: 1,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00001"),
        reward_item: {
          //4002688025
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
              mst_equipment_id: calcMstId( "WD_SWORD002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Sword & Shield",
      },
      {
        equip_type: 11,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00002"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_WSWORD002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_WSWORD002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Dual Blades",
      },
      {
        equip_type: 7,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00003"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_LSWORD2002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_LSWORD2002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Long Sword",
      },
      {
        equip_type: 0,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00004"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_LSWORD002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_LSWORD002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Great Sword",
      },
      {
        equip_type: 12,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00005"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_PIPE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_PIPE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Hunting Horn",
      },
      {
        equip_type: 2,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00006"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_HAMMER002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_HAMMER002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Hammer",
      },
      {
        equip_type: 3,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00007"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_LANCE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_LANCE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Lance",
      },
      {
        equip_type: 9,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00008"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_GUNLANCE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_GUNLANCE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Gunlance",
      },
      {
        equip_type: 8,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00009"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_AXE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_AXE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Switch Axe",
      },
      {
        equip_type: 14,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00010"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_CHAXE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_CHAXE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Charge Blade",
      },
      {
        equip_type: 6,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00011"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_LBOWGUN002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_LBOWGUN002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Light Bowgun",
      },
      {
        equip_type: 4,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00012"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_HBOWGUN002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_HBOWGUN002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Heavy Bowgun",
      },
      {
        equip_type: 10,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00013"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_BOW034",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_BOW034"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Bow",
      },
      {
        equip_type: 13,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00014"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_STICK002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_STICK002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Insect Glaive",
      },
      {
        equip_type: 15,
        is_clear: 0,
        mst_quest_id: calcMstId("TRAINING00015"),
        reward_item: {
          //4002688025
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "WD_ACAXE002",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: calcMstId("WD_ACAXE002"),
              potential: 0,
              slv: 0,
              start_remain: 0,
            },
          ],
        },
        reward_text: "Accel Axe",
      },
    ],
  };
  encryptAndSend(data, res, req);
};
