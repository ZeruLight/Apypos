import { Router } from 'express';
import * as eventController from '../../controllers/eventController';

const eventRouter = Router();

eventRouter.post('/info/get', eventController.infoGet);
eventRouter.post('/limitedskill/get', eventController.limitedSkill);

export default eventRouter;
