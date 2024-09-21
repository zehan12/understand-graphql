import express, { Response, Request } from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;