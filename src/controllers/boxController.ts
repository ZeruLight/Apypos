import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    box: {
      eqp_box: 1,
      eqp_set: 1,
      friend_max: 1,
      equipments: [
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_ARM006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3325982510,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_BODY006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 1801022340,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_LEG006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3353202438,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_HEAD006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 69277598,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "WD_SWORD001",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 2006810019,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "AD_WST006",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 62957325,
          potential: 100,
          slv: 5,
          start_remain: 20
        },{
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 3,
          endAwakeCount: 5,
          endAwakeRemain: 10,
          end_remain: 15,
          equipment_id: "OD_OMA689",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 1,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3229325580,
          potential: 100,
          slv: 5,
          start_remain: 20
        }
        // ... (additional equipment entries)
      ],
      growth_items: [
        {
          amount: 5,
          mst_growth_item_id: 321
        },
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
        ]
      },
      hr: 1,
      mlv: {
        atk: 1,
        def: 1,
        hp: 1,
        sp: 1
      },
      otomos: [
        // {
        //   created: 3229325580,
        //   exp: 1000,
        //   mst_otomo_id: 147,
        //   otomo_id: "OD_OMA689",
        //   subskill: [
        //     {
        //       subskill_id: 789,
        //       subskill_exp: 500
        //     },
        //     // ... (additional subskill entries)
        //   ]
        // },
        // // ... (additional otomo entries)
      ],
      partners: [
        // {
        //   created: 1609459200,
        //   exp: 2000,
        //   mst_partner_id: 258,
        //   partner_id: "partner456"
        // },
        // ... (additional partner entries)
      ]
    }
  };
  encryptAndSend(data, res);
};
