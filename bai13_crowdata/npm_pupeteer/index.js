


// const puppeteer = require('puppeteer');

// const getData = async () => {
//     try {
//         const browser = await puppeteer.launch({ headless: false });   //Mở trình duyệt Chrome lên để bắt đầu làm trò. Hàm này trả về object kiểu Browser.
//     const page = await browser.newPage();                               // Mở một tab mới trong Chrome để làm trò. Hàm này trả về object kiểu Page.
//         await page.setViewport({ width: 1280, height:720 }); 
//         await page.goto('http://kenh14.vn', { waitUntil: 'networkidle2' });      //mo trang moi cho den khi no load xong thi thoi
//     await page.screenshot({path: 'kenh14.png'});

//     await browser.close();           //Tắt trình duyệt (Đỡ phải tắt bằng tay)
//     } catch (err) {
//         console.log(`err = ${err}`);
//     }
// }
// getData();


// cow du lieu

// const puppeteer = require('puppeteer');

// (async() => {

//     // Mở trình duyệt mới và tới trang của kenh14
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('http://kenh14.vn');

//     // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến article
//     const articles = await page.evaluate(() => {                            //cho phép ta chạy script trong browser và lấy kết quả trả về.
//         let titleLinks = document.querySelectorAll('h3.knswli-title > a');
//         titleLinks = [...titleLinks];
//         let articles = titleLinks.map(link => ({
//             title: link.getAttribute('title'),
//             url: link.getAttribute('href')
//         }));
//         return articles;
//     });

//     // In ra kết quả và đóng trình duyệt
//     console.log(articles);
//     await browser.close();
// })();


// cai cai nay thi moi dow dc anh: sudo npm install image-downloader --save

// tai anh ve may
const puppeteer = require('puppeteer');
const download = require('image-downloader');

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    console.log('Browser openned');
    const page = await browser.newPage();
    const url = 'http://kenh14.vn/luong-4-trieu-thang-thanh-nien-len-mang-hoi-co-nen-lay-vo-khong-va-day-la-loi-khuyen-chan-thanh-20180801112409827.chn';
    await page.goto(url);
    console.log('Page loaded');

    const imgLinks = await page.evaluate(() => {
        let imgElements = document.querySelectorAll('#img_f74cd5d0-9545-11e8-ade3-cdbc552f1f1f');
        imgElements = [...imgElements];
        let imgLinks = imgElements.map(i => i.getAttribute('src'));
        return imgLinks;
    });
    console.log(imgLinks);

    // Tải các ảnh này về thư mục hiện tại
    await Promise.all(imgLinks.map(imgUrl => download.image({
        url: imgUrl,
        dest: __dirname
    })));

    await browser.close();
})();

// chay node index ko sudo node index