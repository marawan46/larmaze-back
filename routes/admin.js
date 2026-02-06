const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const mongoose = require("mongoose");

const router = express.Router();

router.post(
     "/login",
     async (req, res) => {
          const { email, password } = req.body;
          const admin = await User.findOne({ email });
          if (!admin) return res.status(404).json({message:"No User Found"});

          const ok = await bcrypt.compare(password, admin.passwordHash);
          if (!ok) return res.sendStatus(401);

          const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
               expiresIn: "10m",
          });
          res.json({ token });
     },
);

// Temporary route to create the first admin (remove after initial setup)
// router.post(
//      "/register",
//      async (req, res) => {
//           try {
//                const email = "miro@gmail.com"
//                const password = "123456"

//                // Check if admin already exists
//                const existingAdmin = await User.findOne({ email });
//                if (existingAdmin) {
//                     return res
//                          .status(409)
//                          .json({ message: "Admin already exists" });
//                }

//                // Hash password
//                const salt = await bcrypt.genSalt(10);
//                const passwordHash = await bcrypt.hash(password, salt);

//                // Create new admin
//                const admin = new User({ email, passwordHash });
//                await admin.save();

//                res.status(201).json({
//                     message: "Admin created successfully",
//                     adminId: admin._id,
//                });
//           } catch (error) {
//                res.status(500).json({
//                     message: "Error creating admin",
//                     error: error.message,
//                });
//           }
//      },
// );

module.exports = router;
