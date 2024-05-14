const express = require('express');
const dotenv = require('dotenv').config()
const cors = require("cors");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const router = require('./routes/index.js')
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5000

connectDB();

const app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})