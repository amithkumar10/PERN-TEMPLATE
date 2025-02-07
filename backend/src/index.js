import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./route.js";
import { PrismaClient } from "@prisma/client";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies
const prisma = new PrismaClient();

app.use(cookieParser()); // Parse cookies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

async function checkDbConnection() {
  try {
    await prisma.$connect(); // Attempt to connect to the database
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Call the function to check DB connection
checkDbConnection();

// Basic Route
app.use("/api", router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
