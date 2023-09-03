import { Router } from 'express';
import * as activityController from '../../controllers/activityController';

const activityRouter = Router();

activityRouter.post('/get', activityController.get);

export default activityRouter;
