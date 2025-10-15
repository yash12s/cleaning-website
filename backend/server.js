// server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";              
import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import { verifyMailer } from "./config/mail.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], 
    credentials: false,
  })
);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

verifyMailer?.();

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
