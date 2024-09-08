import { Router } from "express";
import * as boxController from "../../controllers/boxController";
import * as notImplemented from "../../controllers/notImplementedController";

const boxRouter = Router();

boxRouter.post("/get", boxController.get);
boxRouter.post("/payment/get", boxController.PaymentGet);

boxRouter.post("/storage/info", boxController.storageInfo);
boxRouter.post("/stamp/get", boxController.stampGet);
boxRouter.post("/stamp/hold/get", boxController.stampHoldGet);
boxRouter.post("/stamp/shop/list", boxController.stampShopList);
boxRouter.post("/payment/limit/get", boxController.paymentLimitGet);
boxRouter.post("/otomo/get", boxController.otomoGet);
boxRouter.post("/equipment/capacity/info", boxController.equipCapacityInfo);

export default boxRouter;
