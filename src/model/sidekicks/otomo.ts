import mongoose from "mongoose";
const { Schema } = mongoose;

const otomoSchema = new Schema({
  created: Number,
  exp: Number,
  mst_otomo_id: Number,
  otomo_id: String,
  subskill: [Number],
});

export default otomoSchema;