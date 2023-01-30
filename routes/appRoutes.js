import express from 'express';

import { sendApps, sendLinux, sendProgramming } from './../controllers/appController.js';

const router = express.Router();
router.route('/').get(sendApps);
router.route('/linux').get(sendLinux);
router.route('/programming').get(sendProgramming);

export default router;
