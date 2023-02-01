import express from 'express';

import { sendApps, sendBlogs } from './../controllers/appController.js';

const router = express.Router();
router.route('/').get(sendApps);
router.route('/blogs').get(sendBlogs);

export default router;
