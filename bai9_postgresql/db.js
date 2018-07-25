const sequelize = require('sequelize');

const db = new sequelize({
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
    }
});



db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });