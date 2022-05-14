if (window.jQuery) {
    console.log ('Jquery is connected');
  } else {
    console.log ('Jquery is not connected');
}

//AOS.init();

/*
  $(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} );
*/

/*
$(function(){

  $('.button-2').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#yakor').offset().top }, 1000);
    e.preventDefault();
  });
  
});*/

//Первая версия. Работает циклично на первом найденом элементе
/*
let buttonHeader = document.querySelector('.title-header');
let aButtonHeader = document.querySelector('.active-header');
buttonHeader.onclick = function () {
  buttonHeader.classList.replace('title-header', 'active-header');
  aButtonHeader.classList.replace('active-header', 'title-header');
  buttonHeader = document.querySelector('.title-header');
  aButtonHeader = document.querySelector('.active-header');
}
*/

//Вторая версия. Запускается один раз
/*function abc() {
  document.querySelector('.title-header').classList.replace('title-header', 'active-header');
  document.querySelector('.active-header').classList.replace('active-header', 'title-header');
  document.querySelector('.title-header').onclick = abc;
}
document.querySelector('.title-header').onclick = abc;
*/

//Третья версия. Вообще странная
/*
var f;
f = jQuery('.title-header').clone();

function abc() {
  f = jQuery('.title-header');
  jQuery('.active-header').attr('class', 'title-header');
  f.attr('class', 'active-header');
  
}
jQuery('.title-header').on('click', abc);
*/

//Четвертая версия. Все равно значения переменных не меняются
/*
var a;
var b;
var c;

a = jQuery('.title-header');
b = jQuery('.active-header');
c = jQuery('.sitle-header');

a.on('click', function(){
  a = jQuery('.title-header');
  b = jQuery('.active-header');
  a.attr('class', 'active-header');
  b.attr('class', 'title-header');
  var temp = a;
  a = b;
  b = temp;
});

c.on('click', function(){
  c = jQuery('.sitle-header');
  b = jQuery('.active-header');
  c.attr('class', 'active-header');
  b.attr('class', 'sitle-header');
  var temp = c;
  c = b;
  b = temp;
});
*/