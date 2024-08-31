import { Router } from "express";
import * as webController from "../controllers/webController";

const webRouter = Router();

webRouter.get("/*", webController.getWebContent);


export default webRouter;
