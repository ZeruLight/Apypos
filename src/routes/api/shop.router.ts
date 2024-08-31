import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const shopRouter = Router();

shopRouter.post("/info", notImplemented.blankResponseEncrypted);
shopRouter.post("/list", notImplemented.blankResponseEncrypted);
shopRouter.post("/karidama/info", notImplemented.blankResponseEncrypted);

export default shopRouter;
