import { Router } from 'express';
import * as webController from '../controllers/webController';

const webRouter = Router();

webRouter.get('/web', webController.getWebContent);

export default webRouter;
