import express from "express";
import { upload } from "..";
const router = express.Router();

router.route("/auth/register", upload.single("picture"));
