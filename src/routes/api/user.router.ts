import { Router } from 'express';
import * as userController from '../../controllers/userController';

const userRouter = Router();

userRouter.post('/get', userController.get);
userRouter.post('/otomoteam/get', userController.otomoteamGet);
userRouter.post('/equipset/get', userController.equipSetGet);
userRouter.post('/equipset/social/get', userController.equipSetSocialGet);
userRouter.post('/navigation/all', userController.navigationAll);
userRouter.post('/rename', userController.rename);
userRouter.post('/model/create', userController.modelCreate);

export default userRouter;
