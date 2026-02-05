const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name_en: String,
  name_ar: String,
  description_en: String,
  description_ar: String,

  order: Number,

  category_en: String,
  category_ar: String,

  images: [String],

  price: Number,
  offerPrice: Number,

  isOffer: Boolean,
  isPopular: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
