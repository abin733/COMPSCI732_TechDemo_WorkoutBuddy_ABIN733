const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');
const cors = require('cors');

// Load dotenv if necessary
require('dotenv').config();

// express app
const app = express();

// Enable CORS for all origins
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.API_URL)
  .then(() => {
    console.log('Server started and connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

// Export the app for serverless deployment
module.exports = app;
