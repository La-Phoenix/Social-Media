import express from "express";
import { addRemoveFriend, getUser, getUserFriends } from "../Controllers/User";
import { verifyToken } from "../Middleware/Auth";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
