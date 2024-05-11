const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const dotenv = require('dotenv').config()
const express = require('express');

const router = express.Router();


router.post('/image', upload.single('file'), function (req, res, next) {
  console.log(req.body)
  console.log(req.file)
})

module.exports = router;