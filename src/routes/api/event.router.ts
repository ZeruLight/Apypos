import { Router } from "express";
import * as eventController from "../../controllers/eventController";
import * as notImplemented from "../../controllers/notImplementedController";

const eventRouter = Router();

eventRouter.post("/info/get", eventController.infoGet);
eventRouter.post("/limitedskill/get", eventController.limitedskillGet);

export default eventRouter;
