import { Router } from 'express';
import * as boxController from '../../controllers/boxController';

const boxRouter = Router();

boxRouter.post('/get', boxController.get);
boxRouter.post('/storage/info', boxController.boxStorageInfo);
boxRouter.post('/stamp/get', boxController.stampGet);
boxRouter.post('/stamp/hold/get', boxController.stampHoldGet);
boxRouter.post('/stamp/shop/list', boxController.stampShopList);

export default boxRouter;
