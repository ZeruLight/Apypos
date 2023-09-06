import { Router } from "express";
import * as checkController from "../../controllers/checkController";

const checkRouter = Router();

checkRouter.post("/nothing", checkController.nothing);

export default checkRouter;
