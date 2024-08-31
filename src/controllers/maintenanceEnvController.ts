import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import { IP } from "../config";

export const getMaintenanceEnvSchedule = (req: Request, res: Response) => {
  const data = {
    start: 1724717135,
    end: 1824717135,
    url: `schedule/url`,
    master_list: [{ login_id: "" }, ],
  };
  encryptAndSend(data, res);
};
