import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import { router as auth } from "./presentation-controllers/auth.controller.js";
import { router as caregiver } from "./presentation-controllers/caregiver.controller.js";
import { router as service } from "./presentation-controllers/serviceModel.controller.js";
import { router as verification } from "./presentation-controllers/emailCode.controller.js";
import { router as serviceSearch } from "./presentation-controllers/search.controller.js";
import { router as serviceOffer } from "./presentation-controllers/serviceOffer.controller.js";
import { router as caregiverPetPreference } from "./presentation-controllers/caregiverPetPreference.controller.js";

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
app.use("/caregivers", caregiver, caregiverPetPreference);
app.use("/services", service, serviceOffer);
app.use("/services", serviceSearch);
app.use("/verification", verification);
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
