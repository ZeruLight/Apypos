import { Router } from 'express';
import * as welcomeController from '../../controllers/welcomeController';

const welcomeRouter = Router();

welcomeRouter.post('/safety/flag/get', welcomeController.getSafetyFlag);

export default welcomeRouter;
