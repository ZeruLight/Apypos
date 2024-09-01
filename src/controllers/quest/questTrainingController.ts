import { Request, Response } from "express";
import { encryptAndSend } from "../../services/crypto/encryptionHelpers";


export const trainingEnd = (req: Request, res: Response) => {
  const data = {
    mst_quest_id: 1749033009,
    pop_list: [{
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
        ],
      },
      pop_id: 1
    }
    ]
  };
  encryptAndSend(data, res, req);
};

export const trainingStart = (req: Request, res: Response) => {
  const data = {
    instance_data: {
      block_list: [{
        block_idx: 1,
        block_instance_list: [
          //{ instance_id: 0, serial_no: 1 }
        ],
        drop_list: [
          //   {
          //   item_list: {
          //     collections: [

          //     ],
          //     equipments: [],
          //     growth_items: [],
          //     katamaris: [

          //     ],
          //     limiteds: [
          //     ],
          //     matatabis: [],
          //     materials: [{ amount: 2, mst_material_id: 2071584948 }],
          //     monument: {
          //       augite: [],
          //       hr: 0,
          //       mlv: {
          //         atk: 0,
          //         def: 0,
          //         hp: 0,
          //         sp: 0
          //       }

          //     },
          //     otomos: [],
          //     payments: [

          //     ],
          //     pcoins: [

          //     ],
          //     points: [

          //     ],
          //     powers: [

          //     ],
          //     stamp_sets: [

          //     ],
          //     zenny: 8,
          //   },
          //   serial_no: 0
          // }
        ],
        instance_id: 0,
        is_insert: 1,
        is_raid: 0,
        mst_block_id: 0,
        repop_list: [{ amount: 0, serial_no: 0 }]
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
      mission_message: "s",
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

export const trainingList = (req: Request, res: Response) => {
  const data = {
    training_list: [{
      equip_type: 1,
      is_clear: 1,
      mst_quest_id: 1865278504,
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
            mst_equipment_id: 4002688025,
            potential: 0,
            slv: 0,
            start_remain: 0
          }
        ],

      },
      reward_text: "SNS"
    }, {
      equip_type: 2,
      is_clear: 1,
      mst_quest_id: 1865278504,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Hammer"
    }, {
      equip_type: 3,
      is_clear: 1,
      mst_quest_id: 405460158,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Lance"
    }, {
      equip_type: 4,
      is_clear: 1,
      mst_quest_id: 2253275421,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Gun"
    },
      // {
      //   equip_type: 5,
      //   is_clear: 1,
      //   mst_quest_id: 4048122251,
      //   reward_item: {
      //     collections: [
      //       { mst_collection_id: 484329504 }

      //     ],
      //     equipments: [],
      //     growth_items: [],
      //     katamaris: [


      //     ],
      //     limiteds: [
      //     ],
      //     matatabis: [{
      //       amount: 2,
      //       mst_matatabi_id: 182647086
      //     }],
      //     materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
      //     monument: {
      //       augite: [],
      //       hr: 0,
      //       mlv: {
      //         atk: 0,
      //         def: 0,
      //         hp: 0,
      //         sp: 0
      //       }

      //     },
      //     otomos: [],
      //     payments: [

      //     ],
      //     pcoins: [

      //     ],
      //     points: [

      //     ],
      //     powers: [

      //     ],
      //     stamp_sets: [

      //     ],
      //     zenny: 8,
      //   },
      //   reward_text: "Test"
      // }
      , {
      equip_type: 6,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Gun"
    }, {
      equip_type: 7,
      is_clear: 1,
      mst_quest_id: 405460158,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "LSWORD"
    }, {
      equip_type: 8,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Switch Axe"
    }, {
      equip_type: 9,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Gunlance"
    }, {
      equip_type: 10,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Bow"
    }, {
      equip_type: 11,
      is_clear: 1,
      mst_quest_id: 1865278504,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Duel Blades"
    }, {
      equip_type: 12,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Hunting Horn"
    }, {
      equip_type: 13,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Insect Glave"
    }, {
      equip_type: 14,
      is_clear: 1,
      mst_quest_id: 1749033009,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Switch Axe"
    }, {
      equip_type: 15,
      is_clear: 1,
      mst_quest_id: 3897704650,
      reward_item: {
        collections: [
          { mst_collection_id: 484329504 }

        ],
        equipments: [],
        growth_items: [],
        katamaris: [


        ],
        limiteds: [
        ],
        matatabis: [{
          amount: 2,
          mst_matatabi_id: 182647086
        }],
        materials: [{ amount: 2, mst_material_id: 2071584948 }, { amount: 2, mst_material_id: 1921761827 }],
        monument: {
          augite: [],
          hr: 0,
          mlv: {
            atk: 0,
            def: 0,
            hp: 0,
            sp: 0
          }

        },
        otomos: [],
        payments: [

        ],
        pcoins: [

        ],
        points: [

        ],
        powers: [

        ],
        stamp_sets: [

        ],
        zenny: 8,
      },
      reward_text: "Axcel Axe"
    },

    ]

  };
  encryptAndSend(data, res, req);
};






