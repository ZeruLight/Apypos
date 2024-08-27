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
      comment: "comment",
      equip_sets: [{
        partner_equip_sets: [
          {
            mst_partner_id: 1,

            arm: {
              created: 1701921942,
              equipment_id: "AD_ARM000",
              level: 1,
              mst_equipment_id: 9,
              potential: 1,
              skill_level: 1
            },
            body: {
              created: 1701921942,
              equipment_id: "AD_BODY000",
              level: 1,
              mst_equipment_id: 8,
              potential: 1,
              skill_level: 1
            },
            leg: {
              created: 1701921942,
              equipment_id: "AD_LEG000",
              level: 1,
              mst_equipment_id: 11,
              potential: 1,
              skill_level: 1
            },
            head: {
              created: 1701921942,
              equipment_id: "AD_HEAD000",
              level: 1,
              mst_equipment_id: 7,
              potential: 1,
              skill_level: 1
            },
            secret_weapon: {
              created: 0,
              equipment_id: "WD_SWORD000",
              level: 1,
              mst_equipment_id: 13,
              potential: 1,
              skill_level: 1
            },
            talisman: {
              created: 1701921942,
              equipment_id: "OD_OMA000",
              level: 1,
              mst_equipment_id: 12,
              potential: 1,
              skill_level: 1
            },
            waist: {
              created: 1701921942,
              equipment_id: "AD_WST000",
              level: 1,
              mst_equipment_id: 10,
              potential: 1,
              skill_level: 1
            },
            weapon: {
              created: 1701921942,
              equipment_id: "WD_SWORD000",
              level: 1,
              mst_equipment_id: 13,
              potential: 1,
              skill_level: 1
            }
          }
        ],
        arm: {
          created: 1701921942,
          equipment_id: "AD_ARM000",
          level: 1,
          mst_equipment_id: 9,
          potential: 1,
          skill_level: 1
        },
        body: {
          created: 1701921942,
          equipment_id: "AD_BODY000",
          level: 1,
          mst_equipment_id: 8,
          potential: 1,
          skill_level: 1
        },
        leg: {
          created: 1701921942,
          equipment_id: "AD_LEG000",
          level: 1,
          mst_equipment_id: 11,
          potential: 1,
          skill_level: 1
        },
        head: {
          created: 1701921942,
          equipment_id: "AD_HEAD000",
          level: 1,
          mst_equipment_id: 7,
          potential: 1,
          skill_level: 1
        },
        index: 1,
        secret_weapon: {
          created: 0,
          equipment_id: "WD_SWORD000",
          level: 1,
          mst_equipment_id: 13,
          potential: 1,
          skill_level: 1
        },
        talisman: {
          created: 1701921942,
          equipment_id: "OD_OMA000",
          level: 1,
          mst_equipment_id: 12,
          potential: 1,
          skill_level: 1
        },
        waist: {
          created: 1701921942,
          equipment_id: "AD_WST000",
          level: 1,
          mst_equipment_id: 10,
          potential: 1,
          skill_level: 1
        },
        weapon: {
          created: 1701921942,
          equipment_id: "WD_SWORD000",
          level: 1,
          mst_equipment_id: 13,
          potential: 1,
          skill_level: 1
        }
      }
      ],
      game_id: "gameId",
      model_info: {
        face: 1,
        gender: 1,
        hair: 1,
        hair_color: 1,
        inner: 1,
        skin: 1,
      },
      name: "test",
      otomo_team: {
        // main: {
        //   attack: 1,
        //   created: 1,
        //   defense: 1,
        //   exp: 1,
        //   hp: 1,
        //   level: 1,
        //   mst_otomo_id: 0,
        //   otomo_id:"",
        //   subskil:[]
        // },
        // sub: {
        //   attack: 1,
        //   created: 1,
        //   defense: 1,
        //   exp: 1,
        //   hp: 1,
        //   level: 1,
        //   mst_otomo_id: ,
        //   otomo_id:"",
        //   subskil:[]
        // },
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
          equipment_id: "AD_ARM000",
          mst_equipment_id: 9,
        },
        social_body: {
          equipment_id: "AD_BODY000",
          mst_equipment_id: 8,
        },
        social_head: {
          equipment_id: "AD_HEAD000",
          mst_equipment_id: 7,
        },
        social_leg: {
          equipment_id: "AD_LEG000",
          mst_equipment_id: 11,
        },
        social_waist: {
          equipment_id: "AD_WST000",
          mst_equipment_id: 10,
        },
      },
      title: {
        mst_title_id: 0,
      },
      use_social_equip: -1,
      user_id: "userID",
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
export const otomoteamGet = (req: Request, res: Response) => {
  const data = {
    flags: [],
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
    equip_sets: [
    ],
  };
  encryptAndSend(data, res);
};

export const equipSetSocialGet = (req: Request, res: Response) => {
  const data = {
    social_equip_sets: [
      {
        gunner: {
          social_arm: {
            equipment_id: "AD_ARM000",
            mst_equipment_id: 9,
          },
          social_body: {
            equipment_id: "AD_BODY000",
            mst_equipment_id: 8,
          },
          social_head: {
            equipment_id: "AD_HEAD000",
            mst_equipment_id: 7,
          },
          social_leg: {
            equipment_id: "AD_LEG000",
            mst_equipment_id: 11,
          },
          social_waist: {
            equipment_id: "AD_WST000",
            mst_equipment_id: 10,
          },
        },
        is_used: 0,
        knight: {
          social_arm: {
            equipment_id: "AD_ARM000",
            mst_equipment_id: 9,
          },
          social_body: {
            equipment_id: "AD_BODY000",
            mst_equipment_id: 8,
          },
          social_head: {
            equipment_id: "AD_HEAD000",
            mst_equipment_id: 7,
          },
          social_leg: {
            equipment_id: "AD_LEG000",
            mst_equipment_id: 11,
          },
          social_waist: {
            equipment_id: "AD_WST000",
            mst_equipment_id: 10,
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
