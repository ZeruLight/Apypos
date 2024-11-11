import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    box: {
      capacity: {
        eqp_box: 100,
        eqp_set: 100,
        friend_max: 100,
      },
      collection:[{mst_collection_id:484329504}],
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
        {
          auto_potential_composite: 0,
          awaked: 0,
          created: 1,
          elv: 0,
          endAwakeCount: 0,
          endAwakeRemain: 0,
          end_remain: 0,
          equipment_id: "WD_ACAXE084",
          evolve_start_time: 0,
          favorite: 0,
          is_awake: 0,
          is_complete_auto_potential_composite: 0,
          mst_equipment_id: 2854720283,
          potential: 0,
          slv: 1,
          start_remain: 0
        }
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
      matatabis: [{amount:1,mst_matatabi_id:2481694868}
        // {
        //   amount: 3,
        //   mst_matatabi_id: 987
        // },
        // ... (additional matatabi entries)
      ],
      materials: [
        {
          amount: 10,
          mst_material_id: 1714092880
        },
        {amount:1,mst_material_id:1714092880},{amount:1,mst_material_id:288213958},{amount:1,mst_material_id:1911177763},{amount:1,mst_material_id:116224693},
        {amount:1,mst_material_id:1726002341},{amount:1,mst_material_id:1714092880},{amount:1,mst_material_id:1642667129},{amount:1,mst_material_id:1714092880}
        // ... (additional material entries)
      ],
      monument: {
        augite: [
          {
            amount: 20,
            mst_augite_id: 2047024966,
            mst_monument_type_id: 1,
          },
        ], 
        hr: 2,
        mlv: {
          atk: 100,
          def: 100,
          hp: 100,
          sp: 100,
        },
      },
      otomos: [
        {
          created: 3229325580,
          exp: 1000,
          mst_otomo_id: 2092467563,
          otomo_id: "OT_OTOMO_CHAR_ID_001",
          subskill: []
        },
        
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
      payments: [{
        amount:100,
        mst_payment_id:1573159746
      }
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
      zeny: 1000000
    }
  };
  encryptAndSend(data, res,req);
};
export const storageInfo = (req: Request, res: Response) => {
  const data = {
    storage_info:{
      storage_details:[
        {
          max:100,
          name:"storageInfo",
          now:0,
          storage_idx:1,

        },
        {
          max:100,
          name:"storageInfo",
          now:0,
          storage_idx:2,

        }
      ],
      storage_limit:1000,
      storage_num:100
    }
  };
  encryptAndSend(data, res,req);
};

export const otomoGet = (req: Request, res: Response) => {
  const data = {
    otomos:[]
  };
  encryptAndSend(data, res,req);
};


export const equipCapacityInfo = (req: Request, res: Response) => {
  const data = {
    max:10000,
    now:0,
    price:0
  };
  encryptAndSend(data, res,req);
};

export const equipCapacityExpand = (req: Request, res: Response) => {
  const data = {
    max:10000,
    now:0,
    price:0
  };
  encryptAndSend(data, res,req);
};


export const stampGet = (req: Request, res: Response) => {
  const data = {
    stamp_sets:[
      {
        created:0,
        mst_stamp_set_id:67667029
      }
    ]
  };
  encryptAndSend(data, res,req);
};
export const stampHoldGet = (req: Request, res: Response) => {
  const data = {
    hold_stamp_ids:[
      //numbers
    ]
  };
  encryptAndSend(data, res,req);
};
export const stampShopList = (req: Request, res: Response) => {
  const data = {
    stamp_shop_list:[
      {
        end:0,
        mst_stamp_set_id:67667029,
        remain_id:0,
        start:0,
        type:0,
        value:0
      }
    ]
  };
  encryptAndSend(data, res,req);
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
  encryptAndSend(data, res,req);
};

export const PaymentGet = (req: Request, res: Response) => {
  const data = {
    payments:[{
      amount:1,
      mst_payment_id:1573159746
    }]
  };
  encryptAndSend(data, res,req);
};