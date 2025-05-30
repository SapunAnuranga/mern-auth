import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js';
import authRoutes from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: allowedOrigins }));

app.get('/', (req, res) => res.send("API WORKING"));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Server Started on PORT: ${port}`));
