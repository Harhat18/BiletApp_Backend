import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import Point from "./routers/point.routes.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/points", Point);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Start server on ${port}`);
});
