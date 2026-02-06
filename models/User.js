const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
     email: {
          type: String,
          unique: true,
          required: true,
          index: true,
          lowercase: true,
          trim: true,
     },
     passwordHash: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
