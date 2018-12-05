const Sequelize = require('sequelize');
const sequelize = require('../database/database').sequelize;
const Op = require('../database/database').Op;

const Task = sequelize.define(
    'tasks', //ten model
    {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        todoid: {
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        isfinished: {
          type: Sequelize.BOOLEAN
        }  
      },
      {
        timestamps: false,  // se khong tao ra 2 truong timeAt
      }
);


module.exports = Task;