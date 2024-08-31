import { Router } from "express";
import * as nyankanController from "../../controllers/nyankenController";

const nyankanRouter = Router();

nyankanRouter.post("/progress", nyankanController.progress);
nyankanRouter.post("/historyGet", nyankanController.historyGet);

export default nyankanRouter;
