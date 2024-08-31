import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const capLinkRouter = Router();

capLinkRouter.post("/push_register", notImplemented.blankResponseEncrypted); //push usually means notifications...
capLinkRouter.post("/push/setting", notImplemented.blankResponseEncrypted); //push usually means notifications...
capLinkRouter.post("/push/modify", notImplemented.blankResponseEncrypted); //push usually means notifications...

export default capLinkRouter;
