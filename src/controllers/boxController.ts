import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const get = (req: Request, res: Response) => {
  const data = {
    box: {
      capacity: {
        eqp_box: 1000,
        eqp_set: 1000,
        friend_max: 1000,
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
          evolve_start_time: 1609459200,
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
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 62957325,
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
          equipment_id: "OD_OMA000",
          evolve_start_time: 1609459200,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 1978914578,
          potential: 100,
          slv: 1,
          start_remain: 20
        }, {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "WD_SWORD000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 10112309,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "AD_ARM000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 0x2F5DD21B,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "AD_BODY000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 0x823ACEB1,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "AD_HEAD000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 0xED42B2AB,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "AD_LEG000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 0x2EBE6A33,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "AD_WST000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 0xEAA30238,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "WD_LBOWGUN001",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 3125656021,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "OT_WD_WEAPON000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 1508592833,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "OT_AD_BODY000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 2633118217,
          potential: 1,
          slv: 1,
          start_remain: 20
        },
        {
          auto_potential_composite: 1,
          awaked: 0,
          created: 1,
          elv: 1,
          endAwakeCount: 1,
          endAwakeRemain: 1,
          end_remain: 1,
          equipment_id: "OT_AD_HELM000",
          evolve_start_time: 1,
          favorite: 1,
          is_awake: 0,
          is_complete_auto_potential_composite: 1,
          mst_equipment_id: 1980941608,
          potential: 1,
          slv: 1,
          start_remain: 20
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
        {
          created: 3229325580,
          exp: 1000,
          mst_otomo_id: 197113341,
          otomo_id: "OT_OTOMO_CHAR_ID_000",
          subskill: []
        },
        // // ... (additional otomo entries)
      ],
      partners: [
        {
          created: 1609459200,
          exp: 0,
          exp_max: 1000,
          level: 0,
          level_cap_teir: 1,
          level_max: 100,
          mst_partner_id: 507850012,
          partner_id: "PT_CHAR_ID_001"
        },

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
