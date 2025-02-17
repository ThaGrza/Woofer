// ! IDK if I need this.
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
