const express = require('express');
const connectToDatabase = require('./database');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

module.exports = app;
