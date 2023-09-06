import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const noticeRouter = Router();

noticeRouter.post("/get", notImplemented.blankResponseEncrypted);

export default noticeRouter;
