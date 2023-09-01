const Category = require("../models/category.model");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({
      success: true,
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ success: false, error: "Category already exists" });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Category added successfully",
        data: newCategory,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const result = await Category.deleteOne({ _id: categoryId });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Category not found" });
    }

    res.status(204).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = { getCategories, addCategory, deleteCategory };
