import { Request, Response } from "express";
import { encryptAndSend } from "../../../../services/crypto/encryptionHelpers";
import User from "../../../../model/user";



export const equipSetGet = async(req: Request, res: Response) => {

  const filter = { current_session: req.body.session_id };

  const doc = await User.findOne(filter);
  
  const data = doc.equipset;
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
export const equipSetSocialSet = (req: Request, res: Response) => {
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

