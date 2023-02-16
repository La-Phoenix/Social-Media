import express from "express";
import { upload } from "../app";

const router = express.Router();

router.route("/auth/register", upload.single("picture"));

export default router;
