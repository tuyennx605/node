const fs = require('fs');
module.exports = {
    createFile: (duongdan_fileName) => {  //neu co file roi no xoa file do di tao lais
        const fd = fs.openSync(duongdan_fileName, 'w'); //fd: file descriptor: mota
    },
    writeFile: (obj, duongdan_fileName) => {  //ghi dong bo (nghia la ghi xong moi lam j do)
        const jsonstring = JSON.stringify(obj);
        fs.writeFile(duongdan_fileName, jsonstring, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log('save succes' + JSON.stringify(obj.result));
        });
    },
    readJsonOjectFromFile: (duongdan_fileName) => {   //doc khong dong bo
        //asynchonously (doc ko dong bo)
        fs.readFile(duongdan_fileName, (err, data) => {
            if (err) throw err;
            let jsonObj = JSON.parse(data); //chuyen string thanh json
            console.log(`doc: ${jsonObj.result}`);
        });
    },
    redfiledongbo: (duongdan_fileName) => {   //doc dong bo
        var data = fs.readFileSync(duongdan_fileName);
        console.log(data.toString());
    },
    kiemtraDocKodongbo(duongdan_fileName) {
        // console.log("bat dau");
        fs.readFile(duongdan_fileName, (err, data) => {
            if (err) throw err;
            console.log('da doc xong file');
        });
        // console.log('ket thuc');

        // out:
        // bat dau
        // ket thuc
        // save succes200          (ham o tren ghi file);
        // da doc xong file
    },
    getInfoFile: (duongdan_fileName) => {

        console.log("bat dau info!");
        fs.stat(duongdan_fileName, function (err, stats) {
            if (err) {
                return console.error(err);
            }
            console.log(stats);
            console.log(" info successfully!");

            // Check file type
            console.log("isFile ? " + stats.isFile());
            console.log("isDirectory ? " + stats.isDirectory());
            // stats.isFile()	Returns true if file type of a simple file.
            // stats.isDirectory()	Returns true if file type of a directory.
            // stats.isBlockDevice()	Returns true if file type of a block device.
            // stats.isCharacterDevice()	Returns true if file type of a character device.
            // stats.isSymbolicLink()	Returns true if file type of a symbolic link.
            // stats.isFIFO()	Returns true if file type of a FIFO.
            // stats.isSocket()	Returns true if file type of asocket. 
        });
    },
    createThumuc: (duongdan) => {
        fs.mkdir(duongdan, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Directory created successfully!");
        });
    },
    readAllFileinThumuc: (duongdan) => {
        fs.readdir(duongdan, function (err, files) {
            if (err) {
                return console.error(err);
            }
            files.forEach(function (file) {
                console.log(file);
            });
        });
    }

}