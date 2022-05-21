const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const Shoes  = sequelize.define('shoes',{

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
        
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    imgUrl:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    
});

module.exports = Shoes;