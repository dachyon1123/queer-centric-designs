const express = require("express");
const { getPatterns, getPattern, postPattern, updatePattern, deletePattern, } = require("../controllers/patternController");

const router = express.Router();

router
  .get("/", getPatterns)
  .get("/:id", getPattern)
  .post("/", postPattern)
  .put("/:id", updatePattern)
  .delete("/:id", deletePattern);

module.exports = router;
