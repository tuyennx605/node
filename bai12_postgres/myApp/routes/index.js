var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const sequelize = require('sequelize');

const db = new sequelize({
    database: 'db_test1',
    username: 'username',
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



db.authenticate()
  .then(() => {
    console.log('connect database thanh cong11!!!!.');
  })
  .catch(err => {
    console.error('connect data that bai nhe:', err);
  });

  // //tao bang:
  //       const nguoidung = db.define('xuantuyen', {
  //         name: sequelize.STRING,
  //         pass: sequelize.INTEGER
  //       });

  //     // force: true will xoa bang di va thay vao bang khac
  //     nguoidung.sync({force: false}).then(() => {
  //       // Table created
  //       return nguoidung.create({
  //         name: 'John1',
  //         pass: '12346'
  //       });
  //     });

  // db.query("SELECT * FROM tenxang").spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // })
  

  //tao bang
  // db.query('CREATE TABLE "xuantuyen" ("id"   SERIAL , "name" VARCHAR(255), "pass" INTEGER,  PRIMARY KEY("id"))').spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // });
//xoa bang
  // db.query('DROP TABLE "xuantuyen"').spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1xoa: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2xoa: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // })

  //thao tac voi cac truong du lieu
  // them truong
  // db.query("INSERT INTO xuantuyen (name, pass) VALUES ('anh2', 2123) , ('anh3', 2123);").spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1xoa: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2xoa: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // })

  //lay truong
  // db.query("SELECT * FROM lists").spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1xoa: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2xoa: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // })

  //update 1 truong:
  // db.query("UPDATE xuantuyen SET name = 'tuyen22', pass = '111' WHERE pass = 111;").spread((results, metadata) => {
  //   // Results will be an empty array and metadata will contain the number of affected rows.
  //   console.log('tuyen1xoa: ');
  //   console.log(metadata);
  //   console.log('endtuyen1: ');
  //   console.log('tuyen2xoa: ');
  //   console.log(results);
  //   console.log('endtuyen2: ');
  // })

  //xoa

  // ALTER TABLE xuantuyen3 RENAME COLUMN createdAt TO createdat;
  // ALTER TABLE xuantuyen3 RENAME COLUMN updatedAt TO updatedat;
  
//    const async1 = async () => {
//       try {
//         let tblXuanTuyen = await db.query('CREATE TABLE IF NOT EXISTS "xuantuyen3" ("id"   SERIAL , "name" VARCHAR(255), "pass" INTEGER,  PRIMARY KEY("id"))');
//       console.log(`tblXuanTuyen = ${tblXuanTuyen}`);
//       let newObject =  await db.query(`INSERT INTO xuantuyen3(name, pass) VALUES('anh3', '2123'),('anh3', '2123');`);
//       console.log(`newObject = ${JSON.stringify(newObject)}`);
//       let objects = await db.query("SELECT * FROM xuantuyen3");
//       objects.forEach(object => {
//         console.log(`eachObject = ${JSON.stringify(object)}`);
//       });
//       }
//       catch(err){
//         console.log(`Error is : ${err}`);
//       }}


// module.exports = {
//     goidb: async1
// };

// let add_data = ()=>{
//     let qr = 'insert into hotgirl ("anh", "like", "dislike") VALUES';
//     for(let i=1; i<=6; i++){
//         if(i==6)
//         qr += "('"+i+".jpg', 0, 0);"
//         else
//             qr += "('"+i+".jpg', 0, 0),"
//     }

//      db.query(qr).spread((results, metadata) => {
//     // Results will be an empty array and metadata will contain the number of affected rows.
//     console.log('tuyen1: ');
//     console.log(metadata);
//     console.log('endtuyen1: ');
//     console.log('tuyen2: ');
//     console.log(results);
//     console.log('endtuyen2: ');
//   });
// }

// add_data();


// let getDataByID1 = (id1)=>{
//     db.query("SELECT * FROM hotgirl WHERE id = "+id1).spread((results, metadata) => {
//         console.log(results);
//         return results;
//     });
// }

