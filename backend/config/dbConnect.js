/** @format */

'use strict';
const { Sequelize } = require('sequelize');
const GLOBAL = require('./global');

// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you

const sequelize = new Sequelize(
  GLOBAL.DB_NAME,
  GLOBAL.DB_USER,
  GLOBAL.DB_PASSWORD,
  GLOBAL.OPTION
);

const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Successful connection to MySQL Database ${process.env.DB_NAME}`
    );
  } catch (error) {
    console.error('Unable to connect to MySQL database:', error);
    process.exit(1);
  }
};

connectMysql();

module.exports = {
  Sequelize: sequelize,
};
