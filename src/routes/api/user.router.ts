import { Router } from "express";
import * as userController from "../../controllers/userController";
import * as notImplemented from "../../controllers/notImplementedController";

const userRouter = Router();

userRouter.post("/get", userController.get);
userRouter.post("/otomoteam/get", userController.otomoteamGet);
userRouter.post("/equipset/get", userController.equipSetGet);
userRouter.post("/equipset/set", userController.equipSetSet);

userRouter.post("/equipset/social/get", userController.equipSetSocialGet);
userRouter.post("/navigation/all", userController.navigationAll);
userRouter.post("/rename", userController.rename);
userRouter.post("/model/create", userController.modelCreate);
userRouter.post("/model/set", userController.modelSet);
userRouter.post("/title/all", userController.titleAll);
userRouter.post("/title/set", userController.titleSet);
userRouter.post("/comment/set", userController.commentSet);

userRouter.post("/achievement/news", userController.achievementNews);
userRouter.post("/navigation/news", userController.navigationNews);

export default userRouter;
