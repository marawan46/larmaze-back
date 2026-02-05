require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productsRoutes = require("../routes/product");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://larmaze-back.vercel.app/api"
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/products", productsRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Menu API is running 🚀");
});
// app.listen(3000, () => {
//   console.log(`Server listening on port ${3000}`);
// });
// Export for Vercel serverless
module.exports = app;
