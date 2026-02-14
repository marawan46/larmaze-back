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



module.exports = router;
