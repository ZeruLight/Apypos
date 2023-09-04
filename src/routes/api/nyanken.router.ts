import { Router } from 'express';
import * as notImplemented from '../../controllers/notImplementedController';

const nyankanRouter = Router();

nyankanRouter.post('/progress', notImplemented.blankResponseEncrypted);

export default nyankanRouter;
