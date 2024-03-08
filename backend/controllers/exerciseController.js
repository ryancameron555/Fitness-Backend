/** @format */

'use strict';
const Models = require('../models');
const axios = require('axios');
const { config } = require('dotenv');
config();

// Import the insertDataIntoDatabase function from dataInsertion.js
const { insertDataIntoDatabase } = require('../config/dataInsertion');

/**
 *
 * @path - /api/exercise
 */
// @desc    get all exercises from the API and store in DB
// @route   GET /apiPull
// @access  Public
const getAPIExercise = async (req, res) => {
  try {
    // Extracting type, muscle, and difficulty from query parameters
    const { type, muscle, difficulty } = req.query;

    // Building the query string based on the provided parameters
    let queryString = '';

    if (type !== 'null') {
      queryString += `type=${type}&`;
    }
    if (muscle !== 'null') {
      queryString += `muscle=${muscle}&`;
    }
    if (difficulty !== 'null') {
      queryString += `difficulty=${difficulty}`;
    }

    // Making the API request with the constructed query string
    const response = await axios.get(`${process.env.API_URL}?${queryString}`, {
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST,
      },
    });

    // Inserting fetched data into the database
    await insertDataIntoDatabase(response.data);

    res.status(200).json({
      success: true,
      message: 'Data fetched successfully from API and saved to database',
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// const getAPIExercise = async (res) => {
//   const options = {
//     method: 'GET',
//     url: process.env.API_URL,
//     headers: {
//       'X-RapidAPI-Key': process.env.API_KEY,
//       'X-RapidAPI-Host': process.env.API_HOST,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     res.status(200).json({
//       success: true,
//       message: 'Data fetched successfully from Api',
//       data: response.data,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// finds all users in DB, then sends array as response
const getExercise = (res) => {
  Models.Exercise.findAll({})
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({ success: false, message: 'No exercises found' });
      } else {
        res.status(200).json({ result: 200, data: data });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createExercise = (data, res) => {
  Models.Exercise.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// updates the user matching the ID from the param using JSON data POSTed in request body
const updateExercise = (req, res) => {
  console.log(req.body);
  Models.Exercise.update(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes the user matching the ID from the param
const deleteExercise = (req, res) => {
  Models.Exercise.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getAPIExercise,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise,
};
