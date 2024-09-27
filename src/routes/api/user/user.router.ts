import { Router } from "express";
import * as userController from "./user.controller";
import * as userModelController from "./model/userModel.controller";
import * as userOtomoTeamController from "./otomoteam/userOtomoTeam.controller";

import * as userEquipSetController from "./equipset/userEquipSet.controller";
import * as notImplemented from "../notImplementedController";

const userRouter = Router();
//User
userRouter.post("/get", userController.get);
userRouter.post("/rename", userController.rename);
//Comment
userRouter.post("/comment/set", userController.commentSet);
//Model
userRouter.post("/model/create", userModelController.modelCreate);
userRouter.post("/model/set", userModelController.modelSet);

//OtomoTeam
userRouter.post("/otomoteam/get", userOtomoTeamController.otomoteamGet);
userRouter.post("/otomoteam/set", userOtomoTeamController.otomoteamSet);
userRouter.post("/otomoteam/select", userOtomoTeamController.otomoteamSelect);

//EquipSet
userRouter.post("/equipset/get", userEquipSetController.equipSetGet);
userRouter.post("/equipset/set", userEquipSetController.equipSetSet);
userRouter.post("/equipset/social/get", userEquipSetController.equipSetSocialGet);
userRouter.post("/equipset/social/set", userEquipSetController.equipSetSocialSet);

//Nav
userRouter.post("/navigation/all", userController.navigationAll);
userRouter.post("/navigation/news", userController.navigationNews);


//Title
userRouter.post("/title/all", userController.titleAll);
userRouter.post("/title/set", userController.titleSet);
userRouter.post("/title/news", userController.titleNews);
userRouter.post("/achievement/news", userController.achievementNews);
userRouter.post("/achievement/all", userController.achievementAll);

userRouter.post("/offer/check", userController.OfferCheck);
userRouter.post("/search/userID", notImplemented.blankResponseEncrypted);

export default userRouter;
