import express from "express";
import bodyParser from "body-parser";
import { router as auth } from "./presentation-controllers/auth.controller.js";
import { router as userBase } from "./presentation-controllers/user.controller.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use("/auth", auth);
app.use("/", userBase);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
