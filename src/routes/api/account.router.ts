import { Router } from 'express';
import * as accountController from '../../controllers/accountController';

const accountRouter = Router();

accountRouter.post('/account/regist', accountController.registerAccount);
accountRouter.post('/account/login', accountController.loginAccount);

export default accountRouter;
