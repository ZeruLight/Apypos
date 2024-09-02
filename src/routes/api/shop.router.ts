import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";
import * as shopController from "../../controllers/shopController";

const shopRouter = Router();

shopRouter.post("/info", shopController.info);
shopRouter.post("/list", notImplemented.blankResponseEncrypted);
shopRouter.post("/karidama/info", shopController.karidamaInfo);

export default shopRouter;
