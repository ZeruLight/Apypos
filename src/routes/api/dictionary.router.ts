import { Router } from 'express';
import * as dictionaryController from '../../controllers/dictionaryController';

const dictionaryRouter = Router();

dictionaryRouter.post('/account/regist', dictionaryController.getEquipment);

export default dictionaryRouter;
