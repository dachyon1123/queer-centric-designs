const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const dotenv = require("dotenv").config();
const express = require("express");
const Pattern = require("../models/patternSchema");
const { s3Upload, s3Download } = require("../s3Services.js");

const fs = require('fs');
const path = require("path");

const router = express.Router();

router.post("/", upload.single("file"), async function (req, res, next) {
  try {
    const file = req.file
    const result = await s3Upload(file);
    console.log(result);
  } catch (error) {
    console.log(error)
  }

  const { pattern, artist, model, price } = req.body;
  const { filename } = req.file;

  if (!pattern || !artist || !price || !filename) {
    return res
      .status(400)
      .json({ message: "Please provide all necessary fields" });
  }

  try {
    const newPattern = await Pattern.create({
      filename,
      pattern,
      model,
      artist,
      price,
    });

    res
      .status(200)
      .json({ message: "New pattern created", pattern: newPattern });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  fs.unlink(`./uploads/${filename}`, (err) => {
    if (err) throw err;
    console.log(`./uploads/${filename} has been deleted`)
  })

  
});

router.get('/getImages', (req, res) => {
  s3Download();
})

module.exports = router;
