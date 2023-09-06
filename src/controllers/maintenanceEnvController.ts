import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import { IP } from "../config";

export const getMaintenanceEnvSchedule = (req: Request, res: Response) => {
  const data = {
    session_id: "1",
    block_seq: 10,
    app_ver: "09.03.06",
    res_ver: "282",
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
