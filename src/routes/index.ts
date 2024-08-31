import { Router } from "express";
import maintenanceRouter from "./api/maintenance.router";
import accountRouter from "./api/account.router";
import questRouter from "./api/quest.router";
import dictionaryRouter from "./api/dictionary.router";
import welcomeRouter from "./api/welcome.router";
import versionRouter from "./api/version.router";
import webRouter from "./web.router";
import guildRouter from "./api/guild.router";

import maintenanceEnvRouter from "./maintenanceEnv.router";
import tutorialRouter from "./api/tutorial.router";
import boxRouter from "./api/box.router";
import userRouter from "./api/user.router";
import activityRouter from "./api/activity.router";
import noticeRouter from "./api/notice.router";
import capLinkRouter from "./api/capLink.router";
import eventRouter from "./api/event.router";
import shopRouter from "./api/shop.router";
import nyankanRouter from "./api/nyanken.router";
import checkRouter from "./api/checkRouter";
import bannerRouter from "./api/banner.router";
import ticketRouter from "./api/ticket.router";
import popupRouter from "./api/popup.router";

const router = Router();

// API
router.use("/api/maintenance", maintenanceRouter);
router.use("/api/account", accountRouter);
router.use("/api/check", checkRouter);
router.use("/api/quest", questRouter);
router.use("/api/box", boxRouter);
router.use("/api/event", eventRouter);
router.use("/api/user", userRouter);
router.use("/api/guild", guildRouter);
router.use("/api/activity", activityRouter);
router.use("/api/notice", noticeRouter);
router.use("/api/caplink", capLinkRouter);
router.use("/api/shop", shopRouter);
router.use("/api/nyanken", nyankanRouter);
router.use("/api/dictionary", dictionaryRouter);
router.use("/api/welcome", welcomeRouter);
router.use("/api/tutorial", tutorialRouter);
router.use("/api/banner",bannerRouter)
router.use("/api/ticket",ticketRouter)
router.use("/api/popup",popupRouter)


// For version json
router.use("", versionRouter);

// For web
router.use("/web/", webRouter);

//Maintenance Forced
router.use("/maintenance_env", maintenanceEnvRouter);


export default router;
