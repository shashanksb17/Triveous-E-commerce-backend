const express = require('express');
const CategoryRouter = express.Router();
const { getCategories, addCategory, deleteCategory } = require('../controllers/category.controller');

CategoryRouter.get('/', getCategories);

CategoryRouter.post('/', addCategory);

CategoryRouter.delete('/:categoryId', deleteCategory);

module.exports = {CategoryRouter};
