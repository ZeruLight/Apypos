import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const end = (req: Request, res: Response) => {

  const  mst_node_id = req.body.mst_node_id
  const  mst_note_content_id = req.body.mst_note_content_id
  const  mst_ocean_id = req.body.mst_ocean_id
  const  mst_part_id = req.body.mst_part_id
  const  mst_story_id = req.body.mst_story_id
  // Use the above values to determine how to increment the island....
  
  
  const data = {
    mst_part_id:3815380063,
    open_list:{
      open_node:[{mst_node_id:2278830943}],
      open_ocean:[],
      open_part:[]
    },
    pop_list:[
    //   {
    //   item_list:{
    //     pop_id:0,
    //   }
    // }
    ]
  };
  encryptAndSend(data, res,req);
};
