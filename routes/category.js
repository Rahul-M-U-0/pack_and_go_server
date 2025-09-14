const express = require("express");
const categoryController = require("../controllers/category");

const router = express.Router();
const { body } = require("express-validator");

const validateCategory = [
  body("name").not().isEmpty().withMessage("Name is required"),
];

router.post("/", validateCategory, categoryController.createCategory);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
