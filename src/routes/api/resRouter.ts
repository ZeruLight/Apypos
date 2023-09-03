import { Router } from 'express';
import * as downloadController from '../../controllers/downloadController';

const resRouter = Router();

resRouter.get('/download/android/openingDL/download.list', downloadController.openingDL);
resRouter.get('/download/android/tutorialDL/download.list', downloadController.tutorialDL);
resRouter.get('/download/android/trainingDL/download.list', downloadController.trainingDL);
resRouter.get('/download/android/test/test', downloadController.test);


export default resRouter;
