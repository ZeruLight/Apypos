import mongoose from "mongoose";
const { Schema, model } = mongoose;


const QuestSubtargetSchema = new Schema({
  mst_subtarget_id: Number,
  state: Number,
});

const QuestSchema = new Schema({
  clear_time: Number, // Time taken to clear quest
  is_collection_quest: Number,
  is_key_quest: Number,
  mst_quest_id: Number,
  quest_subtargets: [QuestSubtargetSchema],
  state: Number, //0 =? 1 = New 2= ? 3= Clear (S A B C based on clear_time)
});

const NodeSchema = new Schema({
  day_quest_list: [QuestSchema],
  night_quest_list: [QuestSchema],
  is_collection_node: Number, // Discovery flag / if set to 1 adds ? Discovery (Collect Item from node??)
  mst_node_id: Number, 
  mst_story_id: Number,
  state: Number, // State of node //0 = ?? 1 = ?? 2 = new! 3 = Medal and Silver Crown 4 = Medal and Gold Crown 5 = Bubble ... 6 = Help! 7 = Bubble with !  8= Bubble dancing around with music shape 9= Now to the next island sign
});

const RaidInfoSchema = new Schema({
  end_remain: Number,
  mst_node_id: Number,
  start_remain: Number, 
});
const CampaignSchema = new Schema({
  mst_campaign_id: Number,
  remain_time: Number,
});

const NoteContentSchema = new Schema({
  mst_note_content_id: Number,
  state: Number, // Artifact State 0/1 = ? 2 = Newly Discoverd (will do a big opening) 3 = Discoverd
});

const ExplorationNoteSchema = new Schema({
  note_contents: [NoteContentSchema],
  progress: Number,
});

const PartSchema = new Schema({
  campaign: [CampaignSchema],
  exploration_note: ExplorationNoteSchema,
  gingira_node_id: Number, //unk value here if you put node id in here is sparkles
  mst_part_id: Number,
  node_list: [NodeSchema],
  object_list: [{ mst_object_id: Number, state: Number }],
  raid_info: [RaidInfoSchema], // Will put Monster sign above node and put "An intruding monster appears 59 mins"
  silver_bonus: Number,
  state: Number, // Part state (1 = Open, 0 = Closed 2 ==? 3== gingira_node like Sparkle over island)
});
const OceanSchema = new Schema({
  mst_ocean_id: Number,
  part_list: [PartSchema],
});

export default OceanSchema