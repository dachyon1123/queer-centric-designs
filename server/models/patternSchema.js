const mongoose = require("mongoose");

const patternSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
      required: true,
      unique: true,
    },
    artist: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('pattern', patternSchema)