const mongoose = require("mongoose");

const patternSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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