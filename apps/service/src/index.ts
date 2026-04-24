import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import { router as auth } from "./presentation-controllers/auth.controller.js";

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(bodyParser.json());

// Auth
app.use("/auth", auth);

// Profiles
//app.use("/caregivers", caregiver);
//app.use("/owners", owner);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
