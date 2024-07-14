import express from "express";
import cors from "cors";
import { authRouter } from "./routes/authRoutes";
import { bookRouter } from "./routes/bookRoutes";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", bookRouter);
export default app;
