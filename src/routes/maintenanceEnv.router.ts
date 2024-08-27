import { Router } from "express";
import * as maintenanceEnvController from "../controllers/maintenanceEnvController";
import * as webController from "../controllers/webController";

const maintenanceEnvRouter = Router();

maintenanceEnvRouter.get(
  "/schedule",
  maintenanceEnvController.getMaintenanceEnvSchedule,
);
maintenanceEnvRouter.get(
  "",
  webController.getWebContent,
);

export default maintenanceEnvRouter;
