import express from "express";
import { getFeedPosts, getUserPosts, likePosts } from "../Controllers/Post.js";
import { verifyToken } from "../Middleware/Auth.js";

const router = express.Router();

// READ
router.route("/").get(verifyToken, getFeedPosts);
router.route("/:userId/posts").get(verifyToken, getUserPosts);

// PATCH
router.route("/:id/like").patch(verifyToken, likePosts);

export default router;
