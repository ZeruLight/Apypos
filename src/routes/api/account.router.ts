import { Router } from "express";
import * as accountController from "../../controllers/accountController";
import * as notImplemented from "../../controllers/notImplementedController";

const accountRouter = Router();

accountRouter.post("/regist", accountController.registerAccount);
accountRouter.post("/login", accountController.loginAccount);

// Data migration, top right corner on the main screen
// accountRouter.post("/migration/ready", notImplemented.blankResponseEncrypted);
// accountRouter.post("/migration/auth", notImplemented.blankResponseEncrypted);

export default accountRouter;
