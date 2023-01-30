import express from 'express';

import sendApps from './../controllers/appController.js';

const router = express.Router();
router.route('/').get(sendApps);

export default router;
