const express = require("express");
const verfiyAdmin = require("../middleware/auth")
const router = express.Router();
const Product = require("../models/Product");

// CREATE PRODUCT
router.post("/",verfiyAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL PRODUCTS
// Supports language query: ?lang=en or ?lang=ar
router.get("/", async (req, res) => {
  try {
    const { lang } = req.query;

    const products = await Product.find().sort({ order: 1 });

    if (!lang) {
      return res.json(products);
    }

    // Language filter logic
    const filtered = products.map((p) => ({
      _id: p._id,
      title: lang === "ar" ? p.name_ar : p.name_en,
      description: lang === "ar" ? p.description_ar : p.description_en,
      category: lang === "ar" ? p.category_ar : p.category_en,

      images: p.images,
      price: p.price,
      offerPrice: p.offerPrice,
      isOffer: p.isOffer,
      isPopular: p.isPopular,
      order: p.order
    }));

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
});

// UPDATE PRODUCT (PATCH)
router.patch("/:id",verfiyAdmin, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE PRODUCT
router.delete("/:id",verfiyAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
