/** @format */
const express = require('express');
const { HTML } = require('./constant');
let userRoutes = require('./routes/userRoutes');
let exerciseRoutes = require('./routes/exerciseRoutes');
let routineRoutes = require('./routes/routineRoutes');

require('dotenv').config();

let dbConnect = require('./config/dbConnect');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Extract query parameters from URL
// Middleware to properly parse query parameters
app.use((req, res, next) => {
  req.query = req.url.split('?')[1]
    ? Object.fromEntries(new URLSearchParams(req.url.split('?')[1]))
    : {};
  next();
});

// Serve HTML form on root route
app.get('/', (req, res) => {
  res.send(HTML.EXERCISE_FORM);
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/exercise', exerciseRoutes);
app.use('/api/routine', routineRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
