import { Router } from "express";
import * as notImplementedController from "../../controllers/notImplementedController";

const courseRouter = Router();

courseRouter.post("/premium/list", notImplementedController.blankResponseEncrypted);

export default courseRouter;
