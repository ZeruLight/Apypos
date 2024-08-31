import { Router } from "express";
import * as questController from "../../controllers/questController";
import * as notImplemented from "../../controllers/notImplementedController";

const questRouter = Router();

questRouter.post("/progress", questController.questProgress);
questRouter.post("/training/list", questController.trainingList);
questRouter.post("/training/start", questController.trainingStart);
questRouter.post("/training/end", questController.trainingEnd);

// FOREST
// might need to make this modular and reusable for each quest type
questRouter.post("/forest/progress", questController.questForestProgress);
questRouter.post("/forest/end", questController.questForestEnd);
questRouter.post("/forest/info/get", questController.forestInfoGet);
questRouter.post("/forest/restart", questController.forestRestart);


questRouter.post("/island/map/all", questController.islandMapAll);
questRouter.post("/event/list/all", notImplemented.blankResponseEncrypted);
questRouter.post("/eternal/all", notImplemented.blankResponseEncrypted);
questRouter.post("/event/ticket/free", notImplemented.blankResponseEncrypted);

export default questRouter;
