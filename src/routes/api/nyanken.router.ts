import { Router } from 'express';
import * as nyankenController from '../../controllers/nyankenController';

const nyankanRouter = Router();

nyankanRouter.post('/progress', nyankenController.progress);

export default nyankanRouter;
