import express from "express";

import {
  getProducts,
  postProduct,
  deleteProduct,
} from "../controller/products.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts);
router.route("/").post(postProduct);
router.route("/:id").delete(deleteProduct);

export default router;
