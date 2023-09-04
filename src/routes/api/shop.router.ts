import { Router } from 'express';
import * as notImplemented from '../../controllers/notImplementedController';

const shopRouter = Router();

shopRouter.post('/info', notImplemented.blankResponseEncrypted);

export default shopRouter;
