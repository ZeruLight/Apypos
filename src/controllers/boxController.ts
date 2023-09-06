import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    eqp_box: {
      auto_potential_composite: 1,
      awaked: 1,
      created: 1,
      elv: 1,
      endAwakeCount: 1,
      endAwakeRemain: 1,
      end_remain: 2,
      equipment_id: "2",
      evolve_start_time: 1,
      favorite: 1,
      is_awake: 1,
      is_complete_auto_potential_composite: 1,
      mst_equipment_id: 1,
      potential: 1,
      slv: 1,
      start_remain: 2,
    },
    growth_items: [
      // {
      //   "amount": 1,
      //   "mst_growth_item_id": 1
      // },
      // More items if available
    ],
    limiteds: [
      // {
      //   "amount": 1,
      //   "mst_limited_id": 1
      // },
      // More items if available
    ],
    matatabis: [
      // {
      //   "amount": 1,
      //   "mst_matatabi_id": 1
      // },
      // More items if available
    ],
    materials: [
      // {
      //   "amount": 1,
      //   "mst_material_id": 1
      // },
      // More items if available
    ],
    augite: [
      // {
      //   "amount": 1,
      //   "mst_augite_id": 1,
      //   "mst_monument_type_id": 1
      // },
      // More items if available
    ],
    hr: 1,
    mlv: {
      atk: 1,
      def: 1,
      hp: 1,
      sp: 1,
    },
    otomos: [
      // {
      //   "created": 1,
      //   "exp": 1,
      //   "mst_otomo_id": 1,
      //   "otomo_id": "1",
      //   "subskill": [
      //   ]
      // },
      // More otomos if available
    ],
    partners: [
      // {
      //   "created": 1,
      //   "exp": 1,
      //   "exp_max": 1,
      //   "level": 1,
      //   "level_cap_tier": 1,
      //   "level_max": 1,
      //   "mst_partner_id": 1,
      //   "partner_id": "1"
      // },
      // More partners if available
    ],
    payments: [
      // {
      //   "amount": 1,
      //   "mst_payment_id": 1
      // },
      // More payments if available
    ],
    points: [
      // {
      //   "amount": 1,
      //   "mst_event_point_id": 1
      // },
      // More points if available
    ],
    powers: [
      // {
      //   "amount": 1,
      //   "mst_power_id": 1
      // },
      // More powers if available
    ],
    zeny: 1,
  };
  encryptAndSend(data, res);
};
