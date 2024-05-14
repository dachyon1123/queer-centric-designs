const express = require('express');
const router = express.Router();
const patternRoutes = require('./patternRoutes')
const s3Routes = require('./s3Routes.js')

// router.use('/api/patterns', patternRoutes)
router.use("/image", s3Routes)

module.exports = router



