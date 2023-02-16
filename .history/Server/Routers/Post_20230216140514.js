import express from "express";

const router = express.Router();

router.route("/login", logIn);

export default router;
