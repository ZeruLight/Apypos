import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import { IP } from "../ipconfig";

export const getVersionData = (req: Request, res: Response) => {
  const version = {
    res: `http://${IP}/res`,
    api: `http://${IP}/api`,
    web: `http://${IP}/web`,
    maintenance_bucket: `http://${IP}/`,
    maintenance_env: "maintenance_env",
    REMOVEDnew_maintenance_bucket: `http://${IP}/`,
    REMOVEDnew_maintenance_env: "maintenance_env"
  };
  
  res.status(200).header('Content-Type', 'application/json').send(version);
};