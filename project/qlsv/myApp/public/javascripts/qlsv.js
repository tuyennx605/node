var http;
if (window.XMLHttpRequest) {
    // code for modern browsers
    http = new XMLHttpRequest();
} else {
    // code for old IE browsers
    http = new ActiveXObject("Microsoft.XMLHTTP");
}


var idIndexxoa = 0;
var flag_kick = -1; //-1 la ko click j, 0 la them, 1 la sua
var idsua = -1;
document.addEventListener('DOMContentLoaded', function(){
    let btn_xnhan = document.getElementsByClassName('xnhan')[0];
    let btn_them = document.getElementsByClassName('them')[0];
    let btn_sua = document.getElementsByClassName('sua')[0];
    let btn_xoa = document.getElementsByClassName('xoa');
    let tb_body = document.getElementsByClassName('tb_body');
    let hoten = document.getElementById('hoten');
    let ngaythang = document.getElementById('ngaythang');
    let lop = document.getElementById('lop');
    let diachi1 = document.getElementById('diachi');

    function rs_disabled(){
        btn_xnhan.disabled = true;
        hoten.disabled = true;
        ngaythang.disabled = true;
        lop.disabled = true;
        diachi1.disabled = true;
    }
    function rs_nodisabled(){
        btn_xnhan.disabled = false;
        hoten.disabled = false;
        ngaythang.disabled = false;
        lop.disabled = false;
        diachi1.disabled = false;
    }
    function rsvalue(){
        idsua = -1;
        hoten.value = "";
        ngaythang.value = "";
        lop.value = "";
        diachi1.value = "";
    
    }

    for(let i=0; i<btn_xoa.length; i++)
    {
        btn_xoa[i].addEventListener('click', function(){
            event.stopPropagation();
            
            idIndexxoa = this.getAttribute('value1');
            console.log(idIndexxoa);
            xoa(idIndexxoa);
            
        });
    }


    function setdataTable(obj1){
        html1 = '';
        obj = JSON.parse(obj1);
        console.log(obj.length);
        for(i=0; i<obj.length; i++){
            
            html1+='<tr class="tb_body">'+
                '<td>'+obj[i].hoten+'</td>'+
                '<td>'+obj[i].namsinh+'</td>'+ 
                '<td>'+obj[i].lop+'</td>'+
                '<td>'+obj[i].diachi+'</td>'+
                '<td class="tuychon">'+
                    '<button type="button" index = "'+i+'" value1 = "'+obj[i].id+'" class="btn btn-danger xoa">xoa</button>'+
                '</td>'+
            '</tr>';
        }

        document.getElementsByTagName('tbody')[0].innerHTML = html1;

        btn_xoa = document.getElementsByClassName('xoa');
        for(let i=0; i<btn_xoa.length; i++)
        {
            btn_xoa[i].addEventListener('click', function(){
                event.stopPropagation();
                
                idIndexxoa = this.getAttribute('value1');
                console.log(idIndexxoa);
                xoa(idIndexxoa);
                
            });
        }
        console.log(btn_xoa);
        tb_body = document.getElementsByClassName('tb_body');
        for(let i = 0; i<tb_body.length; i++){
            tb_body[i].addEventListener('click', function(){
                // console.log(this);
                // this.stopPropagation();
                event.stopPropagation();
                let td = this.getElementsByTagName('td');
                console.log(td[0].innerText);
                hoten.value = td[0].innerText;
                ngaythang.value = td[1].innerText;
                lop.value = td[2].innerText;
                diachi1.value = td[3].innerText;
                idsua  = td[4].getElementsByTagName('button')[0].getAttribute('value1');
            });
        }
    }

    function getData(){
        console.log('vao get data');
        var url = window.location.href + '/data';
        
        http.open("GET", url, true);
    
        http.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // http.setRequestHeader("Content-length", params.length);
        // http.setRequestHeader("Connection", "close");
        // http.setRequestHeader("haha", "valuer");
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                // alert(http.responseText);
                console.log(http.responseText);
                setdataTable(http.responseText);
            }
        }
        http.send();
     
    }

    function xoa(id1){
        // var url = window.location.href;
        // var http;
        // if (window.XMLHttpRequest) {
        //     // code for modern browsers
        //     http = new XMLHttpRequest();
        // } else {
        //     // code for old IE browsers
        //     http = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // var params = JSON.stringify({
        //     id : id1,
        // });
        // http.open("DELETE", url, true);
    
        // http.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // // http.setRequestHeader("Content-length", params.length);
        // // http.setRequestHeader("Connection", "close");
        // // http.setRequestHeader("haha", "valuer");
        // http.onreadystatechange = function() {
        //     if(http.readyState == 4 && http.status == 200) {
        //         alert(http.responseText);
        //     }
        // }
        // http.send(params);



        const url = `${location.protocol}//${document.domain}:${
        location.port
    }/qlsvs`;
    console.log(url);
        $.ajax({
            url: url,
            xhrFields: {
                withCredentials: true
            },
            crossDomain:true,
            type: "DELETE",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
            async: true,
            // data: { username: username, password: password },
            data: {id : id1},
            dataType: "json",
            success: function(result) {
                console.log(result);
                getData();
            }})

            
    }

    function them(){
        var url = window.location.href;
        var http;
        if (window.XMLHttpRequest) {
            // code for modern browsers
            http = new XMLHttpRequest();
        } else {
            // code for old IE browsers
            http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var params = JSON.stringify({
            hoten : hoten.value,
            namsinh : ngaythang.value,
            lop : lop.value,
            diachi : diachi1.value
        });
        http.open("PUT", url, true);
    
        http.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // http.setRequestHeader("Content-length", params.length);
        // http.setRequestHeader("Connection", "close");
        // http.setRequestHeader("haha", "valuer");
        
        http.onreadystatechange = function() {
            // if(http.readyState == 4 && http.status == 200) {
            //     alert(http.responseText);
            // }
            // console.log(http.readyState);
            if(http.readyState == XMLHttpRequest.DONE)
            {
                console.log(http.response);
                // location.reload();
                getData();
            }
        }
        http.send(params);
            
    }
    rs_disabled();

    function sua(){
        var url = window.location.href+'/sua';
       

        var params = JSON.stringify({
            id:idsua,
            hoten : hoten.value,
            namsinh : ngaythang.value,
            lop : lop.value,
            diachi : diachi1.value
        });
        http.open("PUT", url, true);
    
        http.setRequestHeader("Content-type", "application/json; charset=utf-8");

        
        http.onreadystatechange = function() {

            if(http.readyState == XMLHttpRequest.DONE)
            {
                console.log(http.response);
                getData();
            }
        }
        http.send(params);
            
    }

    btn_them.addEventListener('click', ()=>{
        flag_kick = 0;
        console.log('click them');
        rs_nodisabled();
        rsvalue();
        btn_them.disabled = true;
        btn_sua.disabled = true;
    });

    btn_sua.addEventListener('click', ()=>{
        console.log('click sua');
        if(idsua==-1)
            return;
        flag_kick = 1;
        
        rs_nodisabled();
        btn_them.disabled = true;
        btn_sua.disabled = true;
    });

    btn_xnhan.addEventListener('click', ()=>{
        console.log('click xmjam');
        if(flag_kick==0)
            them();
        if(flag_kick==1)
            sua();
        rs_disabled();
        rsvalue();
        btn_them.disabled = false;
        btn_sua.disabled = false;
        flag_kick=-1;
    });


    for(let i = 0; i<tb_body.length; i++){
        tb_body[i].addEventListener('click', function(){
            // console.log(this);
            // this.stopPropagation();
            event.stopPropagation();
            let td = this.getElementsByTagName('td');
            console.log(td[4].getElementsByTagName('button')[0].getAttribute('value1'));
            hoten.value = td[0].innerText;
            ngaythang.value = td[1].innerText;
            lop.value = td[2].innerText;
            diachi1.value = td[3].innerText;
            idsua  = td[4].getElementsByTagName('button')[0].getAttribute('value1');
        });
    }

}); 


