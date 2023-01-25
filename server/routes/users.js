import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", getUser); // new
// router.get("/:id", verifyToken, getUser); // old
router.get("/:id/friends", getUserFriends);
// router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", addRemoveFriend);
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
