jQuery(document).ready(function($) {  

$(window).load(function(){
// site preloader -- also uncomment the div in the header and the css style for #preloader
$('#siteloader').fadeOut('slow',function(){$(this).remove();});

  /*Site Social share */
  $('.facebook').click(function(e){
	  utag.link({ "click_id": "share-facebook" });
  });

  $('.twitter').click(function(e){
	  utag.link({ "click_id": "share-twitter" });
  });


  /* Social share */
  $('.fb').click(function(e){
	  utag.link({ "click_id": "share-facebook" });
  });

  $('.twit').click(function(e){
	  utag.link({ "click_id": "share-twitter" });
  });



$('.watch_now').click(function(e) {
	utag.link({ "click_id": this.hash.substr(1) });
});


$('.read_more').click(function(e) {
	utag.link({ "click_id": this.hash.substr(1) });
});



setTimeout(function(){ $('#thumb1 a.btn_overlay').trigger('click'); }, 3000);

/***Position Fixed Jquery***/
	$(window).scroll(function(){
		   if($(window).width()>767){
			if($(window).scrollTop()>140){
			$('body').addClass('fixed');
			}else{
				$('body').removeClass('fixed');
				}
			}	
	})

	    if($(window).width()>767){
			if($(window).scrollTop()>140){
			$('body').addClass('fixed');
			}else{
				$('body').removeClass('fixed');
				}
		    }


}); //Window load function ends here




$(window).resize(function(e) {

/***Position Fixed Jquery***/
if($(window).width()>767){

if($(window).scrollTop()>140){
$('body').addClass('fixed');
}else{
	$('body').removeClass('fixed');
	}
} else{
	$('body').removeClass('fixed');
	}
/***Position Fixed Jquery***/
});



//Custom Scrollbar Js
$('.left_sec').jScrollPane({ autoReinitialise:true, mouseWheelSpeed:10, animateScroll: true	});
//$('.left_sec').jScrollPane({verticalDragPosition:0});



$('.thumb_box a.btn_overlay').click(function(e) {
    e.preventDefault();
	$('.thumb_box').removeClass('active');
	$(this).parent('.thumb_box').addClass('active');
	
});



//MMmenu Js


$('.mobilemenu').click(function() {
  $('body').addClass('menu_open');
});

$('.closemenu').click(function() {
  $('body').removeClass('menu_open');
});


$('.block_banner').parallax("50%", 0.1);



});


