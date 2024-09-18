import { Router } from "express";
import * as notImplementedController from "../notImplementedController";

const presentRouter = Router();

presentRouter.post("/sync", notImplementedController.blankResponseEncrypted);

export default presentRouter;
