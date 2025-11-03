import express from "express";
import { createCategory, getCategories } from "../controllers/categoryController.js";
import { categoryValidationRules, validate } from "../middleware/validators.js";

const router = express.Router();

// ✅ Apply validation for POST
router.post("/", categoryValidationRules, validate, createCategory);

// GET does not need validation
router.get("/", getCategories);

export default router;
