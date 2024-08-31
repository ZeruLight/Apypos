import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    payment_model_info: {
      face: {
        man: [],
        woman: []
      }
    },
    user_info: {
      capacity_eqp_set: 1,
      caplink_id: "caplnk",
      comment: "This is my comment",
      equip_sets: [{
        index: 1,
        partner_equip_sets: [
          // {
          //   mst_partner_id: 1,
          //   arm: {
          //     created: 1701921942,
          //     equipment_id: "AD_ARM006",
          //     level: 1,
          //     mst_equipment_id: 3,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   body: {
          //     created: 1701921942,
          //     equipment_id: "AD_BODY006",
          //     level: 1,
          //     mst_equipment_id: 4,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   leg: {
          //     created: 1701921942,
          //     equipment_id: "AD_LEG006",
          //     level: 1,
          //     mst_equipment_id: 1,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   head: {
          //     created: 1701921942,
          //     equipment_id: "AD_HEAD006",
          //     level: 1,
          //     mst_equipment_id: 5,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   secret_weapon: {
          //     created: 0,
          //     equipment_id: "WD_SWORD001",
          //     level: 1,
          //     mst_equipment_id: 6,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   talisman: {
          //     created: 1701921942,
          //     equipment_id: "",
          //     level: 1,
          //     mst_equipment_id: 0,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   waist: {
          //     created: 1701921942,
          //     equipment_id: "AD_WST006",
          //     level: 1,
          //     mst_equipment_id: 2,
          //     potential: 1,
          //     skill_level: 1
          //   },
          //   weapon: {
          //     created: 1701921942,
          //     equipment_id: "WD_SWORD001",
          //     level: 1,
          //     mst_equipment_id: 6,
          //     potential: 1,
          //     skill_level: 1
          //   }
          // }
        ],
        arm: {
          created: 1701921942,
          equipment_id: "AD_ARM006",
          level: 1,
          mst_equipment_id: 3325982510,
          potential: 1,
          skill_level: 1
        },
        body: {
          created: 1701921942,
          equipment_id: "AD_BODY006",
          level: 1,
          mst_equipment_id: 1801022340,
          potential: 1,
          skill_level: 1
        },
        leg: {
          created: 1701921942,
          equipment_id: "AD_LEG006",
          level: 1,
          mst_equipment_id: 3353202438,
          potential: 1,
          skill_level: 1
        },
        head: {
          created: 1701921942,
          equipment_id: "AD_HEAD006",
          level: 1,
          mst_equipment_id: 69277598,
          potential: 1,
          skill_level: 1
        },
        secret_weapon: {
          created: 0,
          equipment_id: "WD_SWORD001",
          level: 1,
          mst_equipment_id: 2006810019,
          potential: 1,
          skill_level: 1
        },
        talisman: {
          created: 1701921942,
          equipment_id: "",
          level: 1,
          mst_equipment_id: 0,
          potential: 1,
          skill_level: 1
        },
        waist: {
          created: 1701921942,
          equipment_id: "AD_WST006",
          level: 1,
          mst_equipment_id: 62957325,
          potential: 1,
          skill_level: 1
        },
        weapon: {
          created: 1701921942,
          equipment_id: "WD_SWORD001",
          level: 1,
          mst_equipment_id: 2006810019,
          potential: 1,
          skill_level: 1
        }
      }
      ],
      game_id: "83R552F3",
      model_info: {
        face: 1,
        gender: 1,
        hair: 1,
        hair_color: 1,
        inner: 1,
        skin: 1,
      },
      name: "username",
      otomo_team: {
        main: {
          attack: 1,
          created: 1,
          defense: 1,
          exp: 1,
          hp: 1,
          level: 1,
          mst_otomo_id: 2092467563,
          otomo_id:"OT_OTOMO_CHAR_ID_001",
          subskil:[]
        },
        sub: {
          attack: 1,
          created: 1,
          defense: 1,
          exp: 1,
          hp: 1,
          level: 1,
          mst_otomo_id:2461459527 ,
          otomo_id:"OT_OTOMO_CHAR_ID_003",
          subskil:[]
        },
      },
      parameter: {
        attack: 1,
        defence: 1,
        hp: 1,
        rank: 1,
        sp: 1
      },
      selected_equip_set_index: 1,
      selected_partner: {
        main_partner_id: "",
        quest_partner_id: ""
      },
      social_equip: {
        social_arm: {
          equipment_id: "AD_ARM006",
          mst_equipment_id: 3325982510,
        },
        social_body: {
          equipment_id: "AD_BODY006",
          mst_equipment_id: 1801022340,
        },
        social_head: {
          equipment_id: "AD_HEAD006",
          mst_equipment_id: 69277598,
        },
        social_leg: {
          equipment_id: "AD_LEG006",
          mst_equipment_id: 3353202438,
        },
        social_waist: {
          equipment_id: "AD_WST006",
          mst_equipment_id: 62957325,
        },
      },
      title: {
        mst_title_id: 0,
      },
      use_social_equip: -1,
      user_id: "user_id",
    }
    
  };
  encryptAndSend(data, res);
};

export const modelCreate = (req: Request, res: Response) => {
  const data = {
    model_info: {
      face: 1,
      gender: 1,
      hair: 1,
      hair_color: 1,
      inner: 1,
      skin: 1,
    },
    tutorial_step: 210, // 210 activate video
  };
  console.log(`TutorialStep : ${data.tutorial_step}`);

  encryptAndSend(data, res);
};

export const modelSet = (req: Request, res: Response) => {
  const data = {
    model_info: {
      face: 1,
      gender: 1,
      hair: 1,
      hair_color: 1,
      inner: 1,
      skin: 1,
    },
  };

  encryptAndSend(data, res);
};

export const otomoteamGet = (req: Request, res: Response) => {
  const data = {
    capacity:1,
    otomo_team:[
      {index:1,
        otomo_ids:["OT_OTOMO_CHAR_ID_001"]
      }
    ],
    selected_index:1
  };
  encryptAndSend(data, res);
};

export const rename = (req: Request, res: Response) => {
  const data = {
    name: req.body.name,
  };
  encryptAndSend(data, res);
};
export const equipSetGet = (req: Request, res: Response) => {
  const data = {
    capacity_eqp_set: 1,
    equip_sets: [{
      index: 1,
      partner_equip_sets: [
        // {
        //   mst_partner_id: 1,
        //   arm: {
        //     created: 1701921942,
        //     equipment_id: "AD_ARM006",
        //     level: 1,
        //     mst_equipment_id: 3,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   body: {
        //     created: 1701921942,
        //     equipment_id: "AD_BODY006",
        //     level: 1,
        //     mst_equipment_id: 4,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   leg: {
        //     created: 1701921942,
        //     equipment_id: "AD_LEG006",
        //     level: 1,
        //     mst_equipment_id: 1,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   head: {
        //     created: 1701921942,
        //     equipment_id: "AD_HEAD006",
        //     level: 1,
        //     mst_equipment_id: 5,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   secret_weapon: {
        //     created: 0,
        //     equipment_id: "WD_SWORD001",
        //     level: 1,
        //     mst_equipment_id: 6,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   talisman: {
        //     created: 1701921942,
        //     equipment_id: "",
        //     level: 1,
        //     mst_equipment_id: 0,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   waist: {
        //     created: 1701921942,
        //     equipment_id: "AD_WST006",
        //     level: 1,
        //     mst_equipment_id: 2,
        //     potential: 1,
        //     skill_level: 1
        //   },
        //   weapon: {
        //     created: 1701921942,
        //     equipment_id: "WD_SWORD001",
        //     level: 1,
        //     mst_equipment_id: 6,
        //     potential: 1,
        //     skill_level: 1
        //   }
        // }
      ],
      arm: {
        created: 1701921942,
        equipment_id: "AD_ARM006",
        level: 1,
        mst_equipment_id: 3325982510,
        potential: 1,
        skill_level: 1
      },
      body: {
        created: 1701921942,
        equipment_id: "AD_BODY006",
        level: 1,
        mst_equipment_id: 1801022340,
        potential: 1,
        skill_level: 1
      },
      leg: {
        created: 1701921942,
        equipment_id: "AD_LEG006",
        level: 1,
        mst_equipment_id: 3353202438,
        potential: 1,
        skill_level: 1
      },
      head: {
        created: 1701921942,
        equipment_id: "AD_HEAD006",
        level: 1,
        mst_equipment_id: 69277598,
        potential: 1,
        skill_level: 1
      },
      secret_weapon: {
        created: 0,
        equipment_id: "WD_SWORD001",
        level: 1,
        mst_equipment_id: 2006810019,
        potential: 1,
        skill_level: 1
      },
      talisman: {
        created: 1701921942,
        equipment_id: "",
        level: 1,
        mst_equipment_id: 0,
        potential: 1,
        skill_level: 1
      },
      waist: {
        created: 1701921942,
        equipment_id: "AD_WST006",
        level: 1,
        mst_equipment_id: 62957325,
        potential: 1,
        skill_level: 1
      },
      weapon: {
        created: 1701921942,
        equipment_id: "WD_SWORD001",
        level: 1,
        mst_equipment_id: 2006810019,
        potential: 1,
        skill_level: 1
      }
    }
    ],
    selected_equip_set_index:1
  };
  encryptAndSend(data, res);
};

export const equipSetSocialGet = (req: Request, res: Response) => {
  const data = {
    social_equip_sets: [
      {
        gunner: {
          social_arm: {
            equipment_id: "AD_ARM006",
            mst_equipment_id: 3325982510,
          },
          social_body: {
            equipment_id: "AD_BODY006",
            mst_equipment_id: 1801022340,
          },
          social_head: {
            equipment_id: "AD_HEAD006",
            mst_equipment_id: 69277598,
          },
          social_leg: {
            equipment_id: "AD_LEG006",
            mst_equipment_id: 3353202438,
          },
          social_waist: {
            equipment_id: "AD_WST006",
            mst_equipment_id: 62957325,
          },
        },
        is_used: 0,
        knight: {
          social_arm: {
            equipment_id: "AD_ARM006",
            mst_equipment_id: 3325982510,
          },
          social_body: {
            equipment_id: "AD_BODY006",
            mst_equipment_id: 1801022340,
          },
          social_head: {
            equipment_id: "AD_HEAD006",
            mst_equipment_id: 69277598,
          },
          social_leg: {
            equipment_id: "AD_LEG006",
            mst_equipment_id: 3353202438,
          },
          social_waist: {
            equipment_id: "AD_WST006",
            mst_equipment_id: 62957325,
          },
        },
        mst_partner_id: 0
      }
      // Additional sets if there are more
    ]
  }
    ;
  encryptAndSend(data, res);
};
export const navigationAll = (req: Request, res: Response) => {
  const data = {
    navigations:[{
      close_at:0,
      end_at:0,
      explain:"",
      is_clear:0,
      is_reward:0,
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
      limited_flag:0,
      mst_navigation_id:0,
      name:"",
      progress:0,
      progress_max:0,
      start_at:0
    }]
  };
  encryptAndSend(data, res);
};