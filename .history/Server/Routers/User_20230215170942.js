import express from "express";
import { verifyToken } from "../Middleware/Auth";

const router = express.Router();

router.get("/:id", verifyToken, getUser);

export default router;
