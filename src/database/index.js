const Sequelize = require('sequelize');
const model = require('../model/boards');
 
const sequelize = new Sequelize('week2' , 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});
const models = model(Sequelize, sequelize);
 
module.exports = {
  Sequelize,
  sequelize,
  models
};

/router/index.js
