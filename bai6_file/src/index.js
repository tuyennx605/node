var fileManager = require('./filemanager');
const fileName = __dirname + '/../data/temp.txt';
const fileName1 = __dirname + '/../data/temp1';
// fileManager.createFile(fileName);     


let jsonobj = {
    foods:[
        {
            name: "tuyen",
            des: "haha"
        },
        {
            name: "tuyen1",
            des: "haha"
        },
        {
            name: "tuyen2",
            des: "haha"
        },
        {
            name: "tuyen3",
            des: "haha"
        },
        {
            name: "tuyen4",
            des: "haha"
        }
    ],
    result: 200,
    tem: "nguyen xuan tuyen"
}
// fileManager.writeFile(jsonobj, fileName);

//kiem tra dong bo

// doc khong dong bo
// console.log('1');
// fileManager.kiemtraDocKodongbo(fileName);
// console.log('2');

// out:
// 1
// 2
// save succes200

// doc dong bo
// console.log('1');
// fileManager.redfiledongbo(fileName);
// console.log('2');

// out:
// 1
// {"foods":[{"name":"tuyen","des":"haha"},{"name":"tuyen1","des":"haha"},{"name":"tuyen2","des":"haha"},{"name":"tuyen3","des":"haha"},{"name":"tuyen4","des":"haha"}],"result":200,"tem":"nguyen xuan tuyen"}
// 2


//infofile:
// fileManager.getInfoFile(fileName);

//taothumuc
// fileManager.createThumuc(fileName1);

//doc het cac file trong thu muc
fileManager.readAllFileinThumuc(fileName1);
