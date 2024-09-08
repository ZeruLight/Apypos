import { Router } from "express";
import * as userController from "../../controllers/user/userController";
import * as userModelController from "../../controllers/user/userModelController";
import * as userEquipSetController from "../../controllers/user/userEquipSetController";

const userRouter = Router();
//User
userRouter.post("/get", userController.get);
userRouter.post("/rename", userController.rename);
//Comment
userRouter.post("/comment/set", userController.commentSet);
//OtomoTeam
userRouter.post("/otomoteam/get", userController.otomoteamGet);
//EquipSet
userRouter.post("/equipset/get", userEquipSetController.equipSetGet);
userRouter.post("/equipset/set", userEquipSetController.equipSetSet);
userRouter.post("/equipset/social/get", userEquipSetController.equipSetSocialGet);
//Nav
userRouter.post("/navigation/all", userController.navigationAll);
userRouter.post("/navigation/news", userController.navigationNews);

//Model
userRouter.post("/model/create", userModelController.modelCreate);
userRouter.post("/model/set", userModelController.modelSet);
//Title
userRouter.post("/title/all", userController.titleAll);
userRouter.post("/title/set", userController.titleSet);
userRouter.post("/title/news", userController.titleNews);
userRouter.post("/achievement/news", userController.achievementNews);
userRouter.post("/achievement/all", userController.achievementAll);

userRouter.post("/offer/check", userController.OfferCheck);

export default userRouter;
