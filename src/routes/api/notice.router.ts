import { Router } from "express";
import * as noticeController from "../../controllers/noticeController";

const noticeRouter = Router();

noticeRouter.post("/get", noticeController.get);

export default noticeRouter;
