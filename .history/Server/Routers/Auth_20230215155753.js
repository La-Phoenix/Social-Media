import express from "express";
import { logIn } from "../Controllers/Auth";

const router = express.Router();

router.route("/login", logIn);

export default router;
