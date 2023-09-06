import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    payment_model_info: {},
    face: {},
    man: [],
    woman: [],
    user_info: {
      capacity_eqp_set: 1,
      caplink_id: "",
      comment: "",
      equip_sets: [
        {
          arm: {},
          body: {},
          head: {},
          partner_equip_sets: [
            // {
            //   "arm": {},
            //   "body": {},
            //   "head": {},
            //   "weapon": {},
            //   "secret_weapon": {},
            //   "talisman": {},
            //   "waist": {},
            //   "mst_partner_id": 0
            // }
            // More partner_equip_sets if present
          ],
        },
        // More equip_sets if present
      ],
    },
    game_id: "1",
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
      main: {
        attack: 1,
        created: 1,
        defense: 1,
        exp: 1,
        hp: 1,
        level: 1,
        mst_otomo_id: 1,
      },
      sub: {
        attack: 1,
        created: 1,
        defense: 1,
        exp: 1,
        hp: 1,
        level: 1,
        mst_otomo_id: 1,
      },
    },
    social_equip: {
      social_arm: {
        equipment_id: "",
        mst_equipment_id: 1,
      },
      social_body: {
        equipment_id: "",
        mst_equipment_id: 1,
      },
      social_head: {
        equipment_id: "",
        mst_equipment_id: 1,
      },
      social_leg: {
        equipment_id: "",
        mst_equipment_id: 1,
      },
      social_waist: {
        equipment_id: "",
        mst_equipment_id: 1,
      },
    },
    title: {
      mst_title_id: 1,
    },
    use_social_equip: 1,
    user_id: "1",
    subskill: [],
  };
  encryptAndSend(data, res);
};

export const modelCreate = (req: Request, res: Response) => {
  const data = {
    model_info: {
      face: 0,
      gender: 0,
      hair: 0,
      hair_color: 0,
      inner: 0,
      skin: 0,
    },
    tutorial_step: 210, // activate video
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
    name: "tests",
  };
  encryptAndSend(data, res);
};
//TODO: Confirm struct
export const equipSetGet = (req: Request, res: Response) => {
  const data = {
    capacity_eqp_set: 30,
    equip_sets: [
      // {
      //   "arm": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "body": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "head": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "index": 1,
      //   "partner_equip_sets": [
      //     // {
      //     //   "arm": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "body": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "head": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "index": 1,
      //     //   "secret_weapon": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "talisman": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "waist": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   },
      //     //   "weapon": {
      //     //     "created": 1,
      //     //     "equipment_id": "1",
      //     //     "level": 1,
      //     //     "mst_equipment_id": 1,
      //     //     "potential": 1,
      //     //     "skill_level": 1
      //     //   }
      //     // },
      //     // Add more partner_equip_sets if needed...
      //   ],
      //   "secret_weapon": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "talisman": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "waist": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   },
      //   "weapon": {
      //     "created": 1,
      //     "equipment_id": "1",
      //     "level": 1,
      //     "mst_equipment_id": 1,
      //     "potential": 1,
      //     "skill_level": 1
      //   }
      // },
      // // Add more equip_sets if needed...
    ],
  };
  encryptAndSend(data, res);
};

export const equipSetSocialGet = (req: Request, res: Response) => {
  const data = {};
  encryptAndSend(data, res);
};
