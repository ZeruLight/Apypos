import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import { IP } from "../config";

export const getMaintenanceEnvSchedule = (req: Request, res: Response) => {
  const data = {
    start: 0,
    end: 0,
    url: `http://${IP}/schedule/url`,
    master_list: [{ login_id: "1" }, { login_id: "2" }],
  };
  encryptAndSend(data, res);
};

export const checkMaintenance = (req: Request, res: Response) => {
  const data = {
    is_maintenance: 0,
    title_banner: {
      banner_id: "7008",
      timeLeft: 2000,
      type: 0,
      url: "http://" + IP + "/test",
    },
    web_url: "http://" + IP + "/test1",
  };
  encryptAndSend(data, res);
};

export const getTitleImage = (req: Request, res: Response) => {
  const data = {
    title_banner: {
      banner_id: "7008",
      timeLeft: 2000,
      type: 1,
      url: "/" + IP + "/test2",
    },
    title_image: {
      mst_title_image_id: 0,//0 Forbidden Ground //1 normal
      mst_title_logo_id: 0, //0 Forbidden Ground //1 normal
    },
  };
  encryptAndSend(data, res);
};
