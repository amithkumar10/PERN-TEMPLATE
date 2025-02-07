import express from "express";
import authRoutes from "./routes/AuthRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);

export default router;
