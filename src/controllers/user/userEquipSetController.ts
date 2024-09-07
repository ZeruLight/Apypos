import { Request, Response } from "express";
import { encryptAndSend } from "../../services/crypto/encryptionHelpers";
import User from "../../model/user";



export const equipSetGet = (req: Request, res: Response) => {
  const data = {
    capacity_eqp_set: 5,
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
    },
    {
      index: 2,
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
    selected_equip_set_index: 1
  };
  encryptAndSend(data, res, req);
};

export const equipSetSet = (req: Request, res: Response) => {
  const data = {
    capacity_eqp_set: 5,
    equip_sets:req.body.equip_sets ,
    selected_equip_set_index: req.body.selected_equip_set_index
  };
  encryptAndSend(data, res, req);
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
  encryptAndSend(data, res, req);
};

