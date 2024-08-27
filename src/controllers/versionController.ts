import { Request, Response } from "express";
import { IP } from "../config";

export const getVersionData = (req: Request, res: Response) => {
  //TODO: seperate out IP into resourceIP etc for code splitting microservices?
  let version = {
    res: `http://${IP}/res`,
    api: `http://${IP}/api`,
    web: `http://${IP}/web`,
    maintenance_bucket: `http://${IP}/`,
    maintenance_env: "maintenance_env",
    
    
  };
  const setMaintenanceNew = false   //Forces Maintenance Web View
  if(setMaintenanceNew){
    const newMaintenanceFields = {
      new_maintenance_bucket: `http://${IP}/`,
      new_maintenance_env: "maintenance_env",
    }
    version = {...newMaintenanceFields,...version}
   
  }

  res.status(200).header("Content-Type", "application/json").send(version);
};
