/** @format */

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');
// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get('/', (req, res) => {
  Controllers.routineController.getRoutine(res);
});
// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
  Controllers.routineController.createRoutine(req.body, res);
});

router.put('/:id', (req, res) => {
  Controllers.routineController.updateRoutine(req, res);
});

router.delete('/:id', (req, res) => {
  Controllers.routineController.deleteRoutine(req, res);
});

module.exports = router;
