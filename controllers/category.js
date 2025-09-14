const { Category } = require("../models/category");
const { validationResult } = require("express-validator");

// Create a new category
exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));
    return res.status(400).json({ errors: errorMessages });
  }

  try {
    let category = new Category(req.body);

    category = await category.save();

    if (!category) {
      return res.status(500).json({
        type: "Internal server error",
        message: "Could not create a new category",
      });
    }

    return res.status(201).json(category);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({
        type: "AuthError",
        message: "Category with that name already exists",
      });
    }
    return res.status(500).json({ type: error.name, message: error.message });
  }
};

// Get all categories
exports.getCategories = async (_, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(404).json({ message: "Categories not found" });
    }
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await User.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Categories not found" });
    }
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};

// Update category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { name, description, icon, isActive } = req.body;
    const category = await User.findByIdAndUpdate(
      req.params.id,
      { name, description, icon, isActive },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};

// Delete category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};
