const Sequelize = require('sequelize');
const sequelize = require('../database/database').sequelize;
const Op = require('../database/database').Op;
const Task = require('./Task');

 const Todo = sequelize.define('todos', 
{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    priority: {
      type: Sequelize.TINYINT
    },
    description: {
      type: Sequelize.TEXT
    },
    duedate: {
      type: Sequelize.DATE
    }  
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  });

  //quan he mot nhieu
  Todo.hasMany(Task, {foreignKey:'todoid', sourceKey: 'id'});   // 1 dodu nhieu task
  Task.belongsTo(Todo, {foreignKey:'todoid', targetKey: 'id'}); //1 task tuong ung 1 todu

  module.exports = Todo;