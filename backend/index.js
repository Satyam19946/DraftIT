// use the route listing method from here - http://expressjs.com/en/starter/faq.html
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());

// Connect to mongodb
require('dotenv').config();
const uri = process.env.MONGOURL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to mongodb');
});

const port = process.env.PORT | 3000;

const user = require('./user/user.js');

app.post('/', user.add)

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
});