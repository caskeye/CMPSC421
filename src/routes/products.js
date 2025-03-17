const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new Product
/**
 * @swagger
 * /:
 * post:
 */
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all Products
/**
 * @swagger
 * /:
 * get:
 */
router.get('/', async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an Product
/**
 * @swagger
 * /:
 * post:
 */
router.patch('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an Product
/**
 * @swagger
 * /:
 * delete:
 */
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;