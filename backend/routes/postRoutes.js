import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

import { postValidationRules, validate } from "../middleware/validators.js";
import { authMiddleware } from "./middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);

// ✅ Apply validation middleware for POST and PUT
router.post("/posts", authMiddleware, createPost);
router.put("/posts/:id", authMiddleware, updatePost);
router.delete("/posts/:id", authMiddleware, deletePost);

export default router;
