import express from "express";
import { logIn } from "../Controllers/Auth.js";

const router = express.Router();

router.route("/login", logIn);

export default router;
