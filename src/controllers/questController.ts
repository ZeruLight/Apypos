import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

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
  encryptAndSend(data, res);
};

export const forestRestart = (req: Request, res: Response) => {
  const data = {
    boost_type: 0,
    enable_limited_skill_id_list: [],
    enable_partner_limited_skill_id_list: [],
    enable_talisman: 0,
    enable_talisman_partner: 0,
    floor_map_id: 0,
    forest_block_list: [{area_no:0,block_idx:0,block_type:0,disaster_id:0,forest_block_instance_list:[{
      hunter_info:{
        model_info: {
          face: 1,
          gender: 1,
          hair: 1,
          hair_color: 1,
          inner: 1,
          skin: 1,
        },
        name:"sdes",
      },
      instance_id:0,
      instance_type:0,
      monster_info:{
        enemy_no:3,
        is_boss_place:0,
        other_table_id:4,
        param_table_id:7
      },
      monster_parts_info:{
        parent_serial_no:0,
        rem_no:0
      },
      pick_info:{
        element:0
      },
      serial_no:1
    }],
    forest_drop_list:[{
      item_list:{

      },
      serial_no:0,
      tmp_item_list:{
        bingocards:[{amount:0,item_id:0}],
        bugis:[{item_id:0,remain_area_count:0}],
        equipskills:[{is_equip:0,item_id:0}],
        shinikiitems:[{amount:0,item_id:0,place_id:0}]
      },
      instance_id:0,
      map_no:1,
      place_id:1
    }],
    instance_id:0,
    playing_level:1,
    playing_node_info:{
      mst_forest_node_id:1266345260,
      mst_forest_quest_id:2045337685
    }
  }],
  };
  encryptAndSend(data, res);
};

export const forestInfoGet = (req: Request, res: Response) => {
  const data = {
    boost_consume_fuel_magnification: 0,
    boost_point_magnification: 0,
    event_name: "test",
    forest_item_list: [{amount:0,item_id:0,place_id:0}],
    mst_event_info_id:3454260853,
    now_fuel:0,
    open_forest_node_list:[{idx:0,
      level_infos:[{clear_reward_item_list:{
       //item_list...
      },
      consume_fuel:0,
      is_fixed_floor_boss:0,
      mst_forest_quest_id:3772789231,
      state:1
    }],
    remain_fuel_full:0,
    }],
    
  };
  encryptAndSend(data, res);
};
export const trainingEnd = (req: Request, res: Response) => {
  const data = {
    mst_quest_id:1749033009,
    pop_list:[{
      item_list:{matatabis: [{
        amount: 2,
        mst_matatabi_id: 182647086
      }],},
      pop_id:1}
    ]
  };
  encryptAndSend(data, res);
};

export const trainingStart = (req: Request, res: Response) => {
  const data = {
    instance_data: {
      block_list: [{
        block_idx: 1,
        block_instance_list: [
          { instance_id: 0, serial_no: 1 }
        ],
        drop_list: [{
          item_list: {
            collections: [

            ],
            equipments: [],
            growth_items: [],
            katamaris: [

            ],
            limiteds: [
            ],
            matatabis: [],
            materials: [{ amount: 2, mst_material_id: 2071584948 }],
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
          serial_no: 0
        }],
        instance_id: 0,
        is_insert: 0,
        is_raid: 0,
        mst_block_id: 3165901164,
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
          mst_enemy_id: 1827199969,
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
      power_up:0,
      select_fix_equipment_idx:0,
      subtargets:[{instance_id:0,mst_subtarget_id:0}]
    }
  };
  encryptAndSend(data, res);
};

export const trainingList = (req: Request, res: Response) => {
  const data = {
    training_list: [{
      equip_type: 1,
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
      reward_text: "SNS"
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    ,{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
    },{
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
        materials: [{ amount: 2, mst_material_id: 2071584948 },{ amount: 2, mst_material_id: 1921761827 }],
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
  encryptAndSend(data, res);
};



export const questForestProgress = (req: Request, res: Response) => {
  const data = {
    instance_id: 0,
    mst_event_info_id: 1185147158,
    playing_node_info: {
      mst_forest_node_id: 1122664016,
      mst_forest_quest_id: 3772789231,
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
    mst_event_info_id: 1185147158,
    new_open_forest_node_id_list: [],
    new_open_forest_quest_id_list: [],
    now_fuel: 0,
    pop_list: [],
    item_list: {
      collections: [
        { mst_collection_id: 0 }
      ],
      equipments: [
        {
          auto_potential_composite: 0,
          awaked: 0,
          created: 0,
          elv: 0,
          endAwakeCount: 0,
          endAwakeRemain: 0,
          end_remain: 0,
          equipment_id: "",
          evolve_start_time: 0,
          favorite: 0,
          is_awake: 0,
          is_complete_auto_potential_composite: 0,
          mst_equipment_id: 0,
          potential: 0,
          slv: 0,
          start_remain: 0
        }
      ],
      growth_items: [{
        amount: 0,
        mst_growth_item_id: 0
      }],
      katamaris: [
        {
          mst_katamari_type_id: 0,
          equipments: [
            {
              auto_potential_composite: 0,
              awaked: 0,
              created: 0,
              elv: 0,
              endAwakeCount: 0,
              endAwakeRemain: 0,
              end_remain: 0,
              equipment_id: "",
              evolve_start_time: 0,
              favorite: 0,
              is_awake: 0,
              is_complete_auto_potential_composite: 0,
              mst_equipment_id: 0,
              potential: 0,
              slv: 0,
              start_remain: 0
            }
          ]
        }
      ],
      limiteds: [{
        amount: 0,
        mst_limited_id: 0
      }
      ],
      matatabis: [{
        amount: 0,
        mst_matatabi_id: 0
      }],
      materials: [{
        amount: 0,
        mst_material_id: 0
      }],
      monument: {
        augite: [{
          amount: 0,
          mst_augite_id: 0,
          mst_monument_type_id: 0
        }],
        hr: 0,
        mlv: {
          atk: 0,
          def: 0,
          hp: 0,
          sp: 0
        }

      },
      otomos: [{
        created: 0,
        exp: 0,
        mst_otomo_id: 0,
        otomo_id: "",
        subskill: [
          0
        ]
      }],
      payments: [
        {
          amount: 0,
          mst_payment_id: 0
        }
      ],
      pcoins: [
        {
          amount: 0,
          mst_pcoin_id: 0
        }
      ],
      points: [
        {
          amount: 0,
          mst_event_point_id: 0
        }
      ],
      powers: [
        {
          amount: 0,
          mst_power_id: 0
        }
      ],
      stamp_sets: [
        {
          amount: 0,
          mst_stamp_set_id: 0
        }
      ],
      zenny: 0,
    },
    total_event_point_info: [{ amount: 0, mst_event_point_id: 0 }],
    total_point: 0
  };
  encryptAndSend(data, res);
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
  encryptAndSend(data, res);
};
