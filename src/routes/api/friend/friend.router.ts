import { Router } from "express";
import * as notImplementedController from "../notImplementedController";

const friendRouter = Router();

friendRouter.post("/capacity/info", notImplementedController.blankResponseEncrypted);
friendRouter.post("/listRequests", notImplementedController.blankResponseEncrypted);
friendRouter.post("/listFriends", notImplementedController.blankResponseEncrypted);

export default friendRouter;
