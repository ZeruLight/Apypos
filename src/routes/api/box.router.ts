import { Router } from "express";
import * as boxController from "../../controllers/boxController";
import * as notImplemented from "../../controllers/notImplementedController";

const boxRouter = Router();

boxRouter.post("/get", boxController.get);
boxRouter.post("/storage/info", notImplemented.blankResponseEncrypted);
boxRouter.post("/stamp/get", notImplemented.blankResponseEncrypted);
boxRouter.post("/stamp/hold/get", notImplemented.blankResponseEncrypted);
boxRouter.post("/stamp/shop/list", notImplemented.blankResponseEncrypted);

export default boxRouter;
