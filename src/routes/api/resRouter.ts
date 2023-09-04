import { Router } from 'express';
import * as downloadController from '../../controllers/downloadController';
import * as notImplemented from '../../controllers/notImplementedController';

const resRouter = Router();

resRouter.get('/download/android/openingDL/download.list', downloadController.openingDL);
resRouter.get('/download/android/tutorialDL/download.list', downloadController.tutorialDL);
resRouter.get('/download/android/trainingDL/download.list', downloadController.trainingDL);
resRouter.get('/download/android/test/test', notImplemented.blankResponse);


export default resRouter;
