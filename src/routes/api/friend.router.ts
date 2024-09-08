import { Router } from "express";
import * as notImplementedController from "../../controllers/notImplementedController";

const friendRouter = Router();

friendRouter.post("/capacity/info", notImplementedController.blankResponseEncrypted);

export default friendRouter;
