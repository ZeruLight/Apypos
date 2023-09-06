import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const capLinkRouter = Router();

capLinkRouter.post("/push_register", notImplemented.blankResponseEncrypted);

export default capLinkRouter;
