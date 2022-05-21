
const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const User  = sequelize.define('user',{

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    surname:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    authority:{
     type:Sequelize.BOOLEAN,
     allowNull:false
    }
});
/*************************************************************** */


module.exports = User;
