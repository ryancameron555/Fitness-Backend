/** @format */

'use strict';
const Models = require('../models');
// finds all users in DB, then sends array as response
const getUser = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
  Models.User.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = async (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  console.log('GET ID', req.params.id);
  try {
    const updatedUser = await Models.User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedUser[0]) {
      return res.status(404).json({
        message: 'No User found or you are not authorized to update the User',
      });
    }

    res
      .status(200)
      .json({ success: true, message: 'User Updated', data: req.body });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  console.log('GET ID', req.params.id);
  try {
    const deletedUser = await Models.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedUser) {
      return res.status(404).json({
        message: 'No User found or you are not authorized to update the User',
      });
    }

    res
      .status(200)
      .json({ success: true, message: 'User deleted', data: req.body });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
