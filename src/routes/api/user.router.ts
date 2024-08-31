import { Router } from "express";
import * as userController from "../../controllers/userController";
import * as notImplemented from "../../controllers/notImplementedController";

const userRouter = Router();

userRouter.post("/get", userController.get);
userRouter.post("/otomoteam/get", userController.otomoteamGet);
userRouter.post("/equipset/get", userController.equipSetGet);
userRouter.post("/equipset/social/get", userController.equipSetSocialGet);
userRouter.post("/navigation/all", userController.navigationAll);
userRouter.post("/rename", userController.rename);
userRouter.post("/model/create", userController.modelCreate);
userRouter.post("/model/set", userController.modelSet);

// userRouter.post("/achievement/news", notImplemented.blankResponseEncrypted);
// userRouter.post("/navigation/news", notImplemented.blankResponseEncrypted);

export default userRouter;
