const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'Restin@2137', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
