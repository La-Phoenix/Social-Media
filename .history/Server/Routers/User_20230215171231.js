import express from "express";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../Controllers/User.js";
import { verifyToken } from "../Middleware/Auth.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
