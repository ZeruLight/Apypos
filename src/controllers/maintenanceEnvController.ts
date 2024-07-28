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
