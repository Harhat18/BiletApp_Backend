import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { DB } from "./src/models/dbConnect.js";
import Products from "./src/routers/Products.routes.js";

const app = express();
dotenv.config();
DB();

app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/products", Products);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Start server on ${port}`);
});
