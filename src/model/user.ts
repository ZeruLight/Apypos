import mongoose from "mongoose";
import OceanSchema from "./ocean";
const { Schema, model } = mongoose;
const equipPieceSchema = new Schema({
  created: Number,
  equipment_id: { type: String, default: "NO_EQUIP" },
  level: Number,
  mst_equipment_id: Number,
  potential: Number,
  skill_level: Number,
});

const equipsetSchema = new Schema({
  index: { type: Number, default: 1 },
  partner_equip_sets: [
    {
      mst_partner_id: Number,
      arm: equipPieceSchema,
      body: equipPieceSchema,
      leg: equipPieceSchema,
      head: equipPieceSchema,
      secret_weapon: equipPieceSchema,
      talisman: equipPieceSchema,
      waist: equipPieceSchema,
      weapon: equipPieceSchema,
    },
  ],
  arm: equipPieceSchema,
  body: equipPieceSchema,
  leg: equipPieceSchema,
  head: equipPieceSchema,
  secret_weapon: equipPieceSchema,
  talisman: equipPieceSchema,
  waist: equipPieceSchema,
  weapon: equipPieceSchema,
});

const userSchema = new Schema({
  uu_id: String,
  secret_id: String,
  login_id: String,
  user_id: String,
  game_id: String,
  tutorial_step: Number,
  character_name: String,
  current_session: String,
  tutorial_flags: [Number],
  model_info: {
    face: Number,
    gender: Number,
    hair: Number,
    hair_color: Number,
    inner: Number,
    skin: Number,
  },
  equipset: {
    capacity_eqp_set: { type: Number, default: 5 },
    equip_sets: {
      type: [equipsetSchema],
      default: {
        index: 1,
        partner_equip_sets: [],
        arm: {
          created: 1701921942,
          equipment_id: "AD_ARM006",
          level: 1,
          mst_equipment_id: 3325982510,
          potential: 1,
          skill_level: 1,
        },
        body: {
          created: 1701921942,
          equipment_id: "AD_BODY006",
          level: 1,
          mst_equipment_id: 1801022340,
          potential: 1,
          skill_level: 1,
        },
        leg: {
          created: 1701921942,
          equipment_id: "AD_LEG006",
          level: 1,
          mst_equipment_id: 3353202438,
          potential: 1,
          skill_level: 1,
        },
        head: {
          created: 1701921942,
          equipment_id: "AD_HEAD006",
          level: 1,
          mst_equipment_id: 69277598,
          potential: 1,
          skill_level: 1,
        },
        secret_weapon: {
          equipment_id: "NO_EQUIP",
        },
        talisman: {
          created: 1701921942,
          equipment_id: "",
          level: 1,
          mst_equipment_id: 0,
          potential: 1,
          skill_level: 1,
        },
        waist: {
          created: 1701921942,
          equipment_id: "AD_WST006",
          level: 1,
          mst_equipment_id: 62957325,
          potential: 1,
          skill_level: 1,
        },
        weapon: {
          created: 1701921942,
          equipment_id: "WD_SWORD001",
          level: 1,
          mst_equipment_id: 2006810019,
          potential: 1,
          skill_level: 1,
        },
      },
    },
    selected_equip_set_index: { type: Number, default: 1 },
  },
  otomoteam: {
    capacity: { type: Number, default: 1 },
    otomo_team: [
      {
        index: Number,
        otomo_ids: [String],
      },
    ],
    selected_index: { type: Number, default: 1 },
  },
  ocean_list: {
    type: [OceanSchema],
    default: {
      mst_ocean_id: 3525753088, 
      part_list: [
        {
          mst_part_id: 3815380063, 
          campaign: [],
          exploration_note: {
            note_contents: [
              {
                mst_note_content_id: 2030304811,
                state: 1,
              },
              {
                mst_note_content_id: 3758796689,
                state: 1,
              },
              {
                mst_note_content_id: 2534252295,
                state: 1,
              },
              {
                mst_note_content_id: 157878948,
                state: 1,
              },
              {
                mst_note_content_id: 2121153074,
                state: 1,
              },
            ],
            progress: 0,
          },
          gingira_node_id: 3332266232, 
          node_list: [
            {
              day_quest_list: [],
              is_collection_node: 0,
              mst_node_id: 517825253,
              mst_story_id: 1603733826,
              night_quest_list: [],
              state: 0, 
            },
          ],
          object_list: [],
          raid_info: [],
          silver_bonus: 0,
          state: 1, 
        },
      ],
    },
  },
});

const User = model("User", userSchema);
export default User;
