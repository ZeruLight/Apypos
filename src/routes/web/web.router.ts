import { Router } from "express";
import * as webController from "./webController";

const webRouter = Router();

webRouter.get("/*", webController.getWebContent);


export default webRouter;
