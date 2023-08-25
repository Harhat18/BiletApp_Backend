import express from "express";

import { getProducts } from "../controller/products.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts);

export default router;
