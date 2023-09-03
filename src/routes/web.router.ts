import { Router } from 'express';
import * as webController from '../controllers/webController';

const webRouter = Router();

webRouter.get('/web', webController.getWebContent);
webRouter.get('/web/notice/first_dl?device_id=2&hnt_id=1', webController.getWebContent);
webRouter.get('/web/redirect/official/support', webController.getWebContent);


export default webRouter;
