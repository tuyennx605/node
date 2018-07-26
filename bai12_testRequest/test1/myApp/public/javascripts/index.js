// document.addEventListener('DOMContentLoaded', function(){
//     var btn1 = document.getElementsByClassName('btn1');
//     // console.log(btn1);
//     btn1[0].addEventListener('click', function(){
//         // window.open("https://www.w3schools.com");

//         // var tam1 =  window.location.href;   //lay ra location hien tai:
//         //  http://localhost:3000/test1

//         // var tam =    window.location.href.split("/");; //tao ra mang /

//         // var tam = location.protocol;                              //http:

//         // var tam = location.hostname;                             //host localhost
//         // var tam = (location.port ? ':'+location.port: '');       //port: :3000

//         // console.log(tam);

//         var url = 'http://localhost:3000/test1/test';
// //         var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
// //         xhr.open('POST', url, true);
// //         // xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
// //         xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
// //    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //         xhr.send({data: "du lieu"});

// //         xhr.onreadystatechange = ()=>{
// //             if(xhr.readyState == XMLHttpRequest.DONE)
// //             {
// //                 console.log(xhr.response);
// //             }
// //         }


// var http;
// if (window.XMLHttpRequest) {
//     // code for modern browsers
//     http = new XMLHttpRequest();
//  } else {
//     // code for old IE browsers
//     http = new ActiveXObject("Microsoft.XMLHTTP");
// }
// var params = JSON.stringify({ appoverGUID: 123 });
// http.open("POST", url, true);

// http.setRequestHeader("Content-type", "application/json; charset=utf-8");
// // http.setRequestHeader("Content-length", params.length);
// // http.setRequestHeader("Connection", "close");
// http.setRequestHeader("haha", "valuer");
// http.onreadystatechange = function() {
//     if(http.readyState == 4 && http.status == 200) {
//         // alert(http.responseText);
//     }
// }
// http.send(params);
//     });
// }); 






// tham khao:
// // Get all users
// var url  = "http://localhost:8080/api/v1/users";
// var xhr  = new XMLHttpRequest()
// xhr.open('GET', url, true)
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);


// // Get a user
// var url  = "http://localhost:8080/api/v1/users";
// var xhr  = new XMLHttpRequest()
// xhr.open('GET', url+'/1', true)
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);


// // Post a user
// var url = "http://localhost:8080/api/v1/users";

// var data = {};
// data.firstname = "John";
// data.lastname  = "Snow";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "201") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);


// // Update a user
// var url = "http://localhost:8080/api/v1/users";

// var data = {};
// data.firstname = "John2";
// data.lastname  = "Snow2";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url+'/12', true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);


// // Delete a user
// var url = "http://localhost:8080/api/v1/users";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url+'/12', true);
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);


// const url = `${location.protocol}//${document.domain}:${
//         location.port
//     }/member/login`;
//     $('form').submit(function(event) {
//         // Stop the browser from submitting the form.
//         event.preventDefault();
//         $.ajax({
//             url: url,
//             xhrFields: {
//                 withCredentials: true
//             },
//             crossDomain:true,
//             type: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Access-Control-Allow-Origin": "*"
//             },
//             async: true,
//             // data: { username: username, password: password },
//             data: $('form').serialize(),
//             dataType: "json",
//             success: function(result) {}}


document.addEventListener('DOMContentLoaded', function(){
    const url = `${location.protocol}//${document.domain}:${
        location.port
    }/test1/test`;
    console.log(url);
        $.ajax({
            url: url,
            xhrFields: {
                withCredentials: true
            },
            crossDomain:true,
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
            async: true,
            // data: { username: username, password: password },
            data: {heee: "xxx"},
            dataType: "json",
            success: function(result) {
                console.log(result);
            }})

}); 
