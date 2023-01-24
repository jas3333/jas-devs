import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './config/db.js';

const app = express();
app.use(express.json());
connectDB();

app.use('/api/v1/users', userRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5012;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
