/** @format */

// dataInsertion.js
const Exercise = require('../models/exercise');

const insertDataIntoDatabase = async (originalData) => {
  try {
    const exercises = originalData.map((exercise) => ({
      name: exercise.name,
      type: exercise.type,
      muscle: exercise.muscle,
      difficulty: exercise.difficulty,
      instructions: exercise.instructions,
      equipment: exercise.equipment,
    }));

    await Exercise.bulkCreate(exercises);

    console.log('Data inserted successfully into the database.');
  } catch (error) {
    console.error('Error inserting data into the database:', error);
  }
};

module.exports = {
  insertDataIntoDatabase,
};
