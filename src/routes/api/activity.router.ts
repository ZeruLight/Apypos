import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const activityRouter = Router();

activityRouter.post("/get", notImplemented.blankResponseEncrypted);

export default activityRouter;
