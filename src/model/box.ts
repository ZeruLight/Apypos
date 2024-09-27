import mongoose from "mongoose";
import equipmentSchema from "./items/equipment";
import growthItemSchema from "./items/growth_item";
import limitedSchema from "./items/limited";
import matatabiSchema from "./items/matatabi";
import materialSchema from "./items/material";
import paymentSchema from "./items/payment";
import pointSchema from "./items/point";
import powerSchema from "./items/power";
import augiteSchema from "./items/augite";
import otomoSchema from "./sidekicks/otomo";
import partnerSchema from "./sidekicks/partner";
const { Schema, model } = mongoose;

const boxSchema = new Schema({
  box: {
    capacity: {
      eqp_box: { type: Number, default: 100 },
      eqp_set: { type: Number, default: 100 },
      friend_max: { type: Number, default: 100 },
    },
    equipments: {
      type: [equipmentSchema],
      default: [
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
          start_remain: 20,
        },
        {
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
          start_remain: 20,
        },
        {
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
          start_remain: 20,
        },
        {
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
          start_remain: 20,
        },
        {
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
          start_remain: 0,
        },
        {
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
          start_remain: 20,
        },
      ],
    },
    growth_items: [growthItemSchema],
    limiteds: [limitedSchema],
    matatabis: [matatabiSchema],
    materials: [materialSchema],
    monument: {
      augite: [augiteSchema],
      hr: { type: Number, default: 0 },
      mlv: {
        atk: { type: Number, default: 0 },
        def: { type: Number, default: 0 },
        hp: { type: Number, default: 0 },
        sp: { type: Number, default: 0 },
      },
    },
    otomos: [otomoSchema],
    partners: [partnerSchema],
    payments: [paymentSchema],
    points: [pointSchema],
    powers: [powerSchema],
    zeny: { type: Number, default: 100 },
  },
});

const Box = model("Box", boxSchema);
export default Box;
