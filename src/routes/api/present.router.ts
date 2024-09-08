import { Router } from "express";
import * as notImplementedController from "../../controllers/notImplementedController";

const presentRouter = Router();

presentRouter.post("/sync", notImplementedController.blankResponseEncrypted);

export default presentRouter;
