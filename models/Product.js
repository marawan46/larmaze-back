const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name_en: String,
  name_ar: String,
  description_en: String,
  description_ar: String,
order: {
  type: Number,
  default: 0,
  required: true
},
  category_en: String,
  category_ar: String,

  images: [String],

  price: Number,
  offerPrice: Number,

  isOffer: Boolean,
  isPopular: Boolean,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
