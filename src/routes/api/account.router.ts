import { Router } from 'express';
import * as accountController from '../../controllers/accountController';

const accountRouter = Router();

accountRouter.post('/regist', accountController.registerAccount);
accountRouter.post('/login', accountController.loginAccount);

export default accountRouter;
