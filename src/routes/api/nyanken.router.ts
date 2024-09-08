import { Router } from "express";
import * as nyankanController from "../../controllers/nyankenController";
import * as notImplementedController from "../../controllers/notImplementedController";

const nyankanRouter = Router();

nyankanRouter.post("/progress", nyankanController.progress);
nyankanRouter.post("/historyGet", nyankanController.historyGet);
nyankanRouter.post("/questlist", nyankanController.QuestList);
nyankanRouter.post("/start", notImplementedController.blankResponseEncrypted);

export default nyankanRouter;
