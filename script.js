if (window.jQuery) {
    console.log ('Jquery is connected');
  } else {
    console.log ('Jquery is not connected');
  }

AOS.init();

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

$(function(){

  $('.button-2').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#yakor').offset().top }, 1000);
    e.preventDefault();
  });
  
  });