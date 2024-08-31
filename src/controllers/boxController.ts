import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    box: {
      capacity: {
        eqp_box: 5,
        eqp_set: 5,
        friend_max: 5,
      },
      equipments: [
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_ARM006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3325982510,
          potential: 100,
          slv: 1,
          start_remain: 20
        }, {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_BODY006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 1801022340,
          potential: 100,
          slv: 1,
          start_remain: 20
        }, {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_LEG006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3353202438,
          potential: 100,
          slv: 1,
          start_remain: 20
        }, {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_HEAD006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 69277598,
          potential: 100,
          slv: 1,
          start_remain: 20
        }, {
          auto_potential_composite: 0,
          awaked: 0,
          created: 1,
          elv: 0,
          endAwakeCount: 0,
          endAwakeRemain: 0,
          end_remain: 0,
          equipment_id: "WD_SWORD001",
          evolve_start_time: 0,
          favorite: 0,
          is_awake: 0,
          is_complete_auto_potential_composite: 0,
          mst_equipment_id: 2006810019,
          potential: 0,
          slv: 1,
          start_remain: 0
        }, {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_WST006",
          evolve_start_time: 0,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 62957325,
          potential: 100,
          slv: 1,
          start_remain: 20
        },
        // ... (additional equipment entries)
      ],
      growth_items: [
        // {
        //   amount: 5,
        //   mst_growth_item_id: 321
        // },
        // ... (additional growth item entries)
      ],
      limiteds: [
        // {
        //   amount: 2,
        //   mst_limited_id: 654
        // },
        // ... (additional limited entries)
      ],
      matatabis: [
        // {
        //   amount: 3,
        //   mst_matatabi_id: 987
        // },
        // ... (additional matatabi entries)
      ],
      materials: [
        // {
        //   amount: 10,
        //   mst_material_id: 159
        // },
        // ... (additional material entries)
      ],
      monument: {
        augite: [
          // {
          //   amount: 4,
          //   mst_augite_id: 357,
          //   mst_monument_type_id: 951
          // },
          // ... (additional augite entries)
        ],

        hr: 1,
        mlv: {
          atk: 1,
          def: 1,
          hp: 1,
          sp: 1
        },
      },
      otomos: [
        // {
        //   created: 3229325580,
        //   exp: 1000,
        //   mst_otomo_id: 197113341,
        //   otomo_id: "OT_OTOMO_CHAR_ID_000",
        //   subskill: []
        // },
        // // ... (additional otomo entries)
      ],
      partners: [
        // {
        //   created: 1609459200,
        //   exp: 0,
        //   exp_max: 1000,
        //   level: 0,
        //   level_cap_tier: 1,
        //   level_max: 100,
        //   mst_partner_id: 507850002,
        //   partner_id: "PT_CHAR_ID_000"
        // },

        // ... (additional partner entries)
      ],
      payments: [
        // {
        //   amount: 0
        //   mst_payment_id: 0
        // },
        // ... (more payment objects)
      ],
      points: [
        // {
        //   amount: 0
        //   mst_event_point_id: 0
        // },
        // ... (more point objects)
      ],
      powers: [
        // {
        //   amount: 0
        //   mst_power_id: 0
        // },
        // ... (more power objects)
      ],
      zeny: 100
    }
  };
  encryptAndSend(data, res);
};
export const storageInfo = (req: Request, res: Response) => {
  const data = {
    storage_info:{
      storage_details:[
        {
          max:0,
          name:"",
          now:0,
          storage_idx:0,

        }
      ],
      storage_limit:0,
      storage_num:0
    }
  };
  encryptAndSend(data, res);
};
export const stampGet = (req: Request, res: Response) => {
  const data = {
    stamp_sets:[
      {
        created:0,
        mst_stamp_set_id:0
      }
    ]
  };
  encryptAndSend(data, res);
};
export const stampHoldGet = (req: Request, res: Response) => {
  const data = {
    hold_stamp_ids:[
      //numbers
    ]
  };
  encryptAndSend(data, res);
};
export const stampShopList = (req: Request, res: Response) => {
  const data = {
    stamp_shop_list:[
      {
        end:0,
        mst_stamp_set_id:0,
        remain_id:0,
        start:0,
        type:0,
        value:0
      }
    ]
  };
  encryptAndSend(data, res);
};
export const paymentLimitGet= (req: Request, res: Response) => {
  const data = {
    payment_limits:[
      {
        amount:1,
        created:1725029111,
        limit:0,
        mst_payment_id:1573159746,
      },
      {
        amount:1,
        created:1725029111,
        limit:0,
        mst_payment_id:3301823224,
      },
      {
        amount:1,
        created:1725029111,
        limit:0,
        mst_payment_id:3016417902,
      }
    ]
  };
  encryptAndSend(data, res);
};