import express from "express";
import { upload, upload } from "../app.js";

const router = express.Router();

const upload = upload;

router.route("/register", upload.single("picture"));

export default router;
