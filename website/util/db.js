const Sequelize = require('sequelize');

const sequelize = new Sequelize('onur','sa','password1', {dialect:'mssql', host:'localhost'});

module.exports = sequelize;