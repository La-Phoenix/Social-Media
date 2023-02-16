import express from "express";
import { getFeedPosts } from "../Controllers/Post";
import { verifyToken } from "../Middleware/Auth";

const router = express.Router();

router.route("/", verifyToken, getFeedPosts);
router.route("/:userId/posts", verifyToken, getUserP);

export default router;
