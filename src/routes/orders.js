const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Create a new Order
router.post('/createOrder', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all Orders
router.get('/getOrder', async (req, res) => {
  try {
    const Orders = await Order.find();
    res.json(Orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an Order
router.patch('/updateOrder/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an Order
router.delete('/deleteOrder/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;