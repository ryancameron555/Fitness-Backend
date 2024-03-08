/** @format */

const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../config/dbConnect');

const sequelizeInstance = dbConnect.Sequelize;

class Exercise extends Model {}
// Sequelize will create this table if it doesn't exist on startup

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
    muscle: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: true,
      // required: false,
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: 'exercise', // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Exercise;
