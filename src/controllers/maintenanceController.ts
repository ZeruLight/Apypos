import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";


export const checkMaintenance = (req: Request, res: Response) => {
  const data = {
    is_maintenance: 0,  //0 false 1 true
    title_banner: {
      banner_id: "",
      timeLeft: 0,
      type: 0,
      url: "checkmaintenance",  
    },
    web_url: "maintenance",  // would become "/web/maintenance?login_id=login_id_on_reg&sec_id=pmRMLkbHtuxw&device_id=2" triggered when is_maintenance is 1
  };
  encryptAndSend(data, res);
};

export const getTitleImage = (req: Request, res: Response) => {
  const data = {
    title_banner: {
      banner_id: "",
      timeLeft: 0,
      type: 0,
      url: "gettitle",  
    },
    title_image: {
      mst_title_image_id: 1,//0 Forbidden Ground //1 normal
      mst_title_logo_id: 1, //0 Forbidden Ground //1 normal
    },
  };
  encryptAndSend(data, res);
};
