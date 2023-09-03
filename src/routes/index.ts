import { Router } from 'express';
import maintenanceRouter from './api/maintenance.router';
import accountRouter from './api/account.router';
import questRouter from './api/quest.router';
import dictionaryRouter from './api/dictionary.router';
import bannerRouter from './api/banner.router';
import welcomeRouter from './api/welcome.router';
import versionRouter from './api/version.router';
import webRouter from './web.router';
import maintenanceEnvRouter from './maintenanceEnv.router';
import tutorialRouter from './api/tutorial.router';

const router = Router();

// API
router.use('/api/maintenance', maintenanceRouter);
router.use('/maintenance_env', maintenanceEnvRouter)
router.use('/api/account', accountRouter)
router.use('/api/quest', questRouter);
router.use('/api/dictionary', dictionaryRouter);
router.use('/api/banner', bannerRouter);
router.use('/api/welcome', welcomeRouter);
router.use('/api/tutorial', tutorialRouter);

// For version json
router.use('', versionRouter);

// For web
router.use('/web', webRouter);

export default router;
