import express from "express";

import {
  getPopular,
  postPopular,
  deletePopular,
  patchPopular,
} from "../controller/popular.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getPopular);
router.route("/").post(postPopular);
router.route("/:id").delete(deletePopular);
router.route("/:id").patch(patchPopular);

export default router;
