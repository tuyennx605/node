const cheerio = require('cheerio');
var request = require('request');

let Parser = require('rss-parser');
let parser = new Parser();



 
// request('http://kenh14.vn/chan-dong-pham-bang-bang-va-quan-ly-cap-cao-bi-canh-sat-bat-giu-vi-tron-thue-20180801121437462.chn', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     // console.log(html);
    
//     const $ = cheerio.load(html)
//     // console.log($.html());
//     console.log($('#k14-detail-content > div.w700.kbwcb-left.kbwcb-top.fl.adm-leftsection > div > div > div.klw-body-top > div.kbwc-header.mb-20 > div.kbwc-meta > span.kbwcm-author'));
//   }
// });

// //get json  
// request.get('https://hls.mediacdn.vn/vtv/2018/8/1/0108thoi-tiet-12h30-15331031182551206505686-cffa7.mp4.json?r=20180801151124', (error, response, html)=>{
//     if (!error && response.statusCode == 200) {
//         console.log(JSON.parse(html).hls);
//     }
// });


//http://localhost:3000/tasks
request.get('http://localhost:3000/tasks', (error, response, html)=>{
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(html));
    }
});

// //post: http://localhost:3000/tasks
// request.post({url:'http://localhost:3000/tasks', form: {todoid: 1, name: 'xxx1212121211', isfinished: 1}}, (error, response, html)=>{
//     console.log(html);
// });



// //parser js
// (async () => {
 
//     let feed = await parser.parseURL('https://vtv.vn/du-bao-thoi-tiet.rss');
//     console.log(feed.items[0].content.find('href'));
   
    
//     // feed.items.forEach(item => {
//     // //   console.log(item.title + ':' + item.link)
//     //   console.log(item.title + ':' + item)
//     // });
   
//   })();