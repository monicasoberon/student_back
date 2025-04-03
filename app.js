// Import required modules
const express = require('express');
const studentController = require('./controllers/studentController');  // Import your controller

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Define the route for getting all students and their statuses
app.get('/students', studentController.getData);

// Start the server using HTTP (local environment)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});