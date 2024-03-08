/** @format */

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');
// const { getAPIExercise } = require('../controllers/exerciseController');
// matches GET requests sent to /api/users
// (the prefix from server.js)

// Get function to pull all API info to DB
// router.get('/apiPull', (req, res) => {
//   Controllers.exerciseController.getAPIExercise(res);
// });

// Route to fetch data from API and save to database
router.get('/apiPull', async (req, res) => {
  try {
    await Controllers.exerciseController.getAPIExercise(req, res); // Pass req object to the controller
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Crud operations below

router.get('/', (req, res) => {
  Controllers.exerciseController.getExercise(res);
});
// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
  Controllers.exerciseController.createExercise(req.body, res);
});

router.put('/:id', (req, res) => {
  Controllers.exerciseController.updateExercise(req, res);
});

router.delete('/:id', (req, res) => {
  Controllers.exerciseController.deleteExercise(req, res);
});

module.exports = router;
