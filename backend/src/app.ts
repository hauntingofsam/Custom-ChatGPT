import express from "express";
import {config} from "dotenv";
import dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
// config();
dotenv.config();
const app=express();
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());
//remove it in production
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,'frontend','dist')))

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'frontend','dist', 'index.html'))
})

app.use("/api/v1",appRouter);

export default app;