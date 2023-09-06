import { Router } from "express";
import * as questController from "../../controllers/questController";
import * as notImplemented from "../../controllers/notImplementedController";

const questRouter = Router();

questRouter.post("/progress", questController.questProgress);

// FOREST
// might need to make this modular and reusable for each quest type
questRouter.post("/forest/progress", questController.questForestProgress);
questRouter.post("/forest/end", questController.questForestEnd);
questRouter.post("/island/map/all", questController.islandMapAll);
questRouter.post("/event/list/all", notImplemented.blankResponseEncrypted);
questRouter.post("/event/ticket/free", notImplemented.blankResponseEncrypted);
questRouter.post("/eternal/all", notImplemented.blankResponseEncrypted);

export default questRouter;
