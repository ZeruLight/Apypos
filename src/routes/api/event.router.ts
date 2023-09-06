import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const eventRouter = Router();

eventRouter.post("/info/get", notImplemented.blankResponseEncrypted);
eventRouter.post("/limitedskill/get", notImplemented.blankResponseEncrypted);

export default eventRouter;
