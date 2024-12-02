import { Router } from "express";
import * as questController from "./questController";
import * as questForestController from "./questForestController";
import * as questTrainingController from "./questTrainingController";

import * as notImplemented from "../notImplementedController";

const questRouter = Router();

questRouter.post("/progress", questController.questProgress);
questRouter.post("/result/end", questController.questResultEnd);

//Other
questRouter.post("/island/map/all", questController.islandMapAll);
questRouter.post("/eternal/all", questController.eternalAll);
questRouter.post("/event/normal/start", questController.eventNormalStart);
questRouter.post("/event/list/all", questController.eventListAll);
questRouter.post("/event/ticket/free", questController.eventTicketFree);
questRouter.post("/island/start", questController.islandStart);
questRouter.post("/island/end", questController.islandEnd);

//Training
questRouter.post("/training/list", questTrainingController.trainingList);
questRouter.post("/training/start", questTrainingController.trainingStart);
questRouter.post("/training/end", questTrainingController.trainingEnd);

// Forest
questRouter.post("/forest/progress", questForestController.questForestProgress);
questRouter.post("/forest/restart", questForestController.questForestRestart);

questRouter.post("/forest/end", questForestController.questForestEnd);
questRouter.post("/forest/info/get", questForestController.forestInfoGet);


questRouter.post("/katamari/content/get", notImplemented.blankResponseEncrypted);



export default questRouter;
