const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;