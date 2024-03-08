/** @format */

const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../config/dbConnect');

const sequelizeInstance = dbConnect.Sequelize;

class Routine extends Model {}
// Sequelize will create this table if it doesn't exist on startup

Routine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    routineName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    exercises: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: 'routine', // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Routine;
