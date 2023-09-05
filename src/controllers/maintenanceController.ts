import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import { IP } from "../config";

export const getMaintenanceEnvSchedule = (req: Request, res: Response) => {
  console.log(req.body)

  const data = {
    session_id: "1",
    block_seq: "0",
    app_ver: "09.03.06",
    res_ver: "v0282",
    error_code: "200",
    now_time: 1,
    relogin_time: 0,
    start: 0,
    end: 0,
    url: `http://${IP}/schedule/url`,
    master_list: [{ login_id: "1" }, { login_id: "2" }],
  };
  encryptAndSend(data, res);
};

export const checkMaintenance = (req: Request, res: Response) => {
  console.log(req.body)

  const data = {
    is_maintenance: 0,
    title_banner: {
      banner_id: "02",
      timeLeft: "0",
      type: "type",
      url: `http://${IP}/bannerurl`,
    },
    web_url: `http://${IP}/weburl`,
  };
  encryptAndSend(data, res);
};

export const getTitleImage = (req: Request, res: Response) => {
  console.log(req.body)

  const data = {
    title_banner: {
      banner_id: "",
      timeLeft: 200,
      type: "0",
      url: "http://"+IP+"/banner.png",
    },
    title_image: {
      mst_title_image_id: 12,
      mst_title_logo_id: 12,
    },
  };
  encryptAndSend(data, res);
};
