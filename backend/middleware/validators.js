import { body, validationResult } from "express-validator";

// ----------------------
// Post Validation
// ----------------------
export const postValidationRules = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Category must be a valid ID"),
];

// ----------------------
// Category Validation
// ----------------------
export const categoryValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").optional().isString().withMessage("Description must be a string"),
];

// ----------------------
// Middleware to handle validation results
// ----------------------
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
