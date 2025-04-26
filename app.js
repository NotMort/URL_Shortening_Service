require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlRoutes = require('./routes/urlRoutes');

app.use(express.json());
app.use('/', urlRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Running on port 3000')))
  .catch(err => console.error(err));
