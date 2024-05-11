const express = require('express');
const router = express.Router();
const patternRoutes = require('./patternRoutes')

router.use('/api/patterns', patternRoutes)

module.exports = router



