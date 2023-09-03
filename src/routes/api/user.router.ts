import { Router } from 'express';
import * as userController from '../../controllers/userController';

const userRouter = Router();

userRouter.post('/get', userController.get);
userRouter.post('/otomoteam/get', userController.otomoteamGet);
userRouter.post('/equipset/get', userController.equipSetGet);
userRouter.post('/equipset/social/get', userController.equipSetSocialGet);
userRouter.post('/navigation/all', userController.navigationAll);

export default userRouter;
