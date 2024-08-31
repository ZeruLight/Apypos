import { Router } from "express";
import * as tutorialController from "../../controllers/tutorialController";

const tutorialRouter = Router();

tutorialRouter.post("/flag/get", tutorialController.getTutorialFlag);
tutorialRouter.post("/flag/set", tutorialController.TutorialFlagSet);

tutorialRouter.post("/step/up", tutorialController.stepUP);

export default tutorialRouter;
