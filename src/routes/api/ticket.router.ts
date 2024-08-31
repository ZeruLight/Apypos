import { Router } from "express";
import * as ticketShopController from "../../controllers/ticketShopController";

const ticketRouter = Router();

ticketRouter.post("/list", ticketShopController.list);

export default ticketRouter;
