document.addEventListener('DOMContentLoaded', function(){
    var main_menu = document.getElementsByClassName('main-menu');
    var sub_menu = document.getElementsByClassName('sub-menu');
    main_menu[0].addEventListener('click',()=>{

            console.log(sub_menu);
            sub_menu[0].classList.toggle('hien');
        
    } );
}); 