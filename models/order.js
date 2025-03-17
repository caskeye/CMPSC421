const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String }
});

const Order = mongoose.model('Order', itemSchema);

module.exports = Order;