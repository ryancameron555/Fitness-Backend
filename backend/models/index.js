/** @format */

'use strict';
//require the model
const User = require('./user');
const Exercise = require('./exercise');
const Routine = require('./routine');

async function init() {
  await User.sync();
  await Exercise.sync();
  await Routine.sync();
  // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  User,
  Exercise,
  Routine,
  // export the model
  // also export any extra models here
};
