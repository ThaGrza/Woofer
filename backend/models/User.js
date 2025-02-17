// ! PERCHANCE DONT NEED SCHEMA BUT MAYBE 
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    dogName: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNULL: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNULL: true,
    }
  }
);

console.log(User);