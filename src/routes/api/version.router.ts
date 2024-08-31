import { Router } from "express";
import * as versionController from "../../controllers/versionController";

const versionRouter = Router();

// TODO: retrieve the version from some request and serve it dynamically to support older versions
versionRouter.get("/*.json", versionController.getVersionData);

export default versionRouter;
