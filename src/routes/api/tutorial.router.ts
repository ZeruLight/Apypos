import { Router } from 'express';
import * as tutorialController from '../../controllers/tutorialController';

const tutorialRouter = Router();

tutorialRouter.post('/flag/get', tutorialController.getTutorialFlag);

export default tutorialRouter;
