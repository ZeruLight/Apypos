import mongoose from "mongoose";
const { Schema } = mongoose;

const equipmentSchema = new Schema({
  auto_potential_composite: Number,
  awaked: Number,
  created: Number,
  elv: Number,
  endAwakeCount: Number,
  endAwakeRemain: Number,
  end_remain: Number,
  equipment_id: String,
  evolve_start_time: Number,
  favorite: Number,
  is_awake: Number,
  is_complete_auto_potential_composite: Number,
  mst_equipment_id: Number,
  potential: Number,
  slv: Number,
  start_remain: Number,
});



export default equipmentSchema;