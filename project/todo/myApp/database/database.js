const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'postgres',
    username: 'postgres',
    password: '123456',
    host: 'localhost',
    operatorsAliases: false,
    port: 5432,
    dialect:'postgres',
    pool: { 
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
      },
    dialectOption:{
        ssl:false
    },
    define:{    
      freezeTableName:true,
      timestamps: false    //tao bang se ko bi co chu s dau sau
    }
});

const Op = sequelize.Op; 



sequelize.authenticate()
  .then(() => {
    console.log('connect database thanh cong11!!!!.');
  })
  .catch(err => {
    console.error('connect data that bai nhe:', err);
  });

  module.exports = {
    sequelize,
    Op
  }
