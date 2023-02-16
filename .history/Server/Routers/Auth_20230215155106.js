import express from "express";
import { upload } from "../app";

const router = express.Router();

router.route("/register", upload.single("picture"));

export default router;
