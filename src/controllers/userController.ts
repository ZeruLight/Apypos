import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    flags: [],
  };
  encryptAndSend(data, res);
};
export const modelCreate = (req: Request, res: Response) => {
  const data = {
    "model_info": {
      "face": 1,
      "gender": 1,
      "hair": 1,
      "hair_color": 1,
      "inner": 1,
      "skin": 1
    },
    "tutorial_step": 210
  };
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
    "name": "test",
  };
  encryptAndSend(data, res);
};
//TODO: Confirm struct
export const equipSetGet = (req: Request, res: Response) => {
  const data = {
    "capacity_eqp_set": 1,
    "equip_sets": [
      {
        "arm": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "body": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "head": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "index": 1,
        "partner_equip_sets": [
          {
            "arm": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "body": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "head": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "index": 1,
            "secret_weapon": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "talisman": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "waist": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            },
            "weapon": {
              "created": 1,
              "equipment_id": "1",
              "level": 1,
              "mst_equipment_id": 1,
              "potential": 1,
              "skill_level": 1
            }
          },
          // Add more partner_equip_sets if needed...
        ],
        "secret_weapon": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "talisman": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "waist": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        },
        "weapon": {
          "created": 1,
          "equipment_id": "1",
          "level": 1,
          "mst_equipment_id": 1,
          "potential": 1,
          "skill_level": 1
        }
      },
      // Add more equip_sets if needed...
    ]
  }
  ;
  encryptAndSend(data, res);
};
export const navigationAll = (req: Request, res: Response) => {
  const data = {
    flags: [],
  };
  encryptAndSend(data, res);
};


export const equipSetSocialGet = (req: Request, res: Response) => {
  const data = {
    flags: [],
  };
  encryptAndSend(data, res);
};