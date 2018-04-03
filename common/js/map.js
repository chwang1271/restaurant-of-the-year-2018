    google.maps.event.addDomListener(window, 'load', init);

//alert(latvalue+' '+lngvalue);
//alert(zoomvalue);
    function init() {
		var markers = new Array();

		var mapstyle=[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},
		{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
		{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},
		{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},
		{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},
		{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
		{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},
		{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
		{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
		{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
		{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
		{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

var dragoption=false;

if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    dragoption=true;
	}
        var mapOptions = {
            center: new google.maps.LatLng(latvalue, lngvalue),
            zoom: zoomvalue,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: false,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : dragoption,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapstyle,
        }//Ending Of Map Options






//Map For NewYork----------------------------------------------------------------------
        var mapElement1 = document.getElementById('map1');

if(mapElement1!=null&&mapElement1!=''){
        var map1 = new google.maps.Map(mapElement1, mapOptions);
        var locations1 = [
['328 Broome Street', 'Bang Bang', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#bang-bang-nyc', 40.7194093,-73.9956073, 'common/images/map-icon2.png','Read More', 'common/images/newyork_img1.jpg', 'common/images/newyork_img2.jpg', 'common/images/newyork_img3.jpg','1'],
['174 Elizabeth Street', 'Pietro Nolita', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#pietro-nolita', 40.7213842,-73.9991359, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img4.jpg', 'common/images/newyork_img5.jpg', 'common/images/newyork_img6.jpg','2'],
['116 Forsyth Street', 'Cafe Henrie', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cafe-henrie', 40.718924,-73.9939217, 'common/images/map-icon2.png','Read More', 'common/images/newyork_img7.jpg', 'common/images/newyork_img8.jpg', 'common/images/newyork_img9.jpg','3'],
['100 Forsyth Street', 'CW Pencil Enterprise', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cw-pencils', 40.7185117,-73.9946295, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img10.jpg', 'common/images/newyork_img11.jpg', 'common/images/newyork_img12.jpg','4'],
['373 Broome Street', 'Cha Cha Matcha', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cha-cha-matcha', 40.7202501,-73.9996643, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img13.jpg', 'common/images/newyork_img14.jpg', 'common/images/newyork_img15.jpg','5']
        ];
        for (i = 0; i < locations1.length; i++) {
			if (locations1[i][1] =='undefined'){ description ='';} else { description = locations1[i][1];}
			if (locations1[i][2] =='undefined'){ telephone ='';} else { telephone = locations1[i][2];}
			if (locations1[i][3] =='undefined'){ email ='';} else { email = locations1[i][3];}
           if (locations1[i][4] =='undefined'){ web ='';} else { web = locations1[i][4];}
           if (locations1[i][7] =='undefined'){ markericon ='';} else { markericon = locations1[i][7];}
		   if (locations1[i][8] =='undefined'){ button_text ='';} else { button_text = locations1[i][8];}
		   if (locations1[i][9] =='undefined'){ img1 ='';} else { img1 = locations1[i][9];}
		   if (locations1[i][10] =='undefined'){ img2 ='';} else { img2 = locations1[i][10];}
		   if (locations1[i][11] =='undefined'){ img3 ='';} else { img3 = locations1[i][11];}
		   if (locations1[i][12] =='undefined'){ pinid ='';} else { pinid = locations1[i][12];}

            marker1 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations1[i][5], locations1[i][6]),
                map: map1,
                title: locations1[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker1, map1, locations1[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker1);
     }

}



//Map For Los Angeles----------------------------------------------------------------------
        var mapElement2 = document.getElementById('map2');

if(mapElement2!=null&&mapElement2!=''){
        var map2 = new google.maps.Map(mapElement2, mapOptions);
        var locations2 = [
['907 E. 3rd Street', 'Manuela', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#manuela', 34.0456066,-118.2383425, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img1.jpg', 'common/images/la_img2.jpg', 'common/images/la_img3.jpg','1'],
['912 E. 3rd Street', 'Guerilla Atelier', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#guerilla-atelier', 34.0448665,-118.2351269, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img4.jpg', 'common/images/la_img5.jpg', 'common/images/la_img6.jpg','2'],
['828 Traction Avenue', 'Arts District Brewing Co.', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#arts-district-brewing-co', 34.0438149,-118.2373242, 'common/images/map-icon2.png','Read More', 'common/images/la_img7.jpg', 'common/images/la_img8.jpg', 'common/images/la_img8.jpg','3'],
['300 S. Santa Fe Avenue', 'Hennessey + Ingalls', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#hennessey-ingalls', 34.0453686,-118.2326499, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img9.jpg', 'common/images/la_img10.jpg', 'common/images/la_img11.jpg','4'],
['255 S. Santa Fe Avenue', 'Hammer and Spear', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#hammer-and-spear', 34.0444987,-118.2327242, 'common/images/map-icon2.png','Read More', 'common/images/la_img12.jpg', 'common/images/la_img13.jpg', 'common/images/la_img14.jpg','5']
        ];
        for (i = 0; i < locations2.length; i++) {
			if (locations2[i][1] =='undefined'){ description ='';} else { description = locations2[i][1];}
			if (locations2[i][2] =='undefined'){ telephone ='';} else { telephone = locations2[i][2];}
			if (locations2[i][3] =='undefined'){ email ='';} else { email = locations2[i][3];}
           if (locations2[i][4] =='undefined'){ web ='';} else { web = locations2[i][4];}
           if (locations2[i][7] =='undefined'){ markericon ='';} else { markericon = locations2[i][7];}
		   if (locations2[i][8] =='undefined'){ button_text ='';} else { button_text = locations2[i][8];}
		   if (locations2[i][9] =='undefined'){ img1 ='';} else { img1 = locations2[i][9];}
		   if (locations2[i][10] =='undefined'){ img2 ='';} else { img2 = locations2[i][10];}
		   if (locations2[i][11] =='undefined'){ img3 ='';} else { img3 = locations2[i][11];}
		   if (locations2[i][12] =='undefined'){ pinid ='';} else { pinid = locations2[i][12];}

            marker2 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations2[i][5], locations2[i][6]),
                map: map2,
                title: locations2[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker2, map2, locations2[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker2);
     }

}


//Map For Dallas----------------------------------------------------------------------
       var mapElement3 = document.getElementById('map3');

if(mapElement3!=null&&mapElement3!=''){
        var map3 = new google.maps.Map(mapElement3, mapOptions);
        var locations3 = [
['1919 Greenville Avenue', 'The Blind Butcher', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#the-blind-butcher', 32.8118224,-96.770932, 'common/images/map-icon2.png','Read More', 'common/images/dallas_img1.jpg', 'common/images/dallas_img2.jpg', 'common/images/dallas_img3.jpg','1'],
['1925 Greenville Avenue', 'Dude, Sweet Chocolate', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#dude-sweet-chocolate', 32.8134144,-96.7735057, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img4.jpg', 'common/images/dallas_img5.jpg', 'common/images/dallas_img6.jpg','2'],
['5624 Sears Street', 'Truck Yard', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#truck-yard', 32.8148846,-96.7748363, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img7.jpg', 'common/images/dallas_img8.jpg', 'common/images/dallas_img9.jpg','3'],
['1909 Greenville Avenue', 'Bullzerk', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#bullzerk', 32.8137061,-96.7728445, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img10.jpg', 'common/images/dallas_img11.jpg', 'common/images/dallas_img12.jpg','4'],
['1808 Lower Greenville Avenue', 'Good Records', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#good-records', 32.81071,-96.7701048, 'common/images/map-icon2.png','Read More', 'common/images/dallas_img13.jpg', 'common/images/dallas_img14.jpg', 'common/images/dallas_img15.jpg','5']
        ];
        for (i = 0; i < locations3.length; i++) {
			if (locations3[i][1] =='undefined'){ description ='';} else { description = locations3[i][1];}
			if (locations3[i][2] =='undefined'){ telephone ='';} else { telephone = locations3[i][2];}
			if (locations3[i][3] =='undefined'){ email ='';} else { email = locations3[i][3];}
           if (locations3[i][4] =='undefined'){ web ='';} else { web = locations3[i][4];}
           if (locations3[i][7] =='undefined'){ markericon ='';} else { markericon = locations3[i][7];}
		   if (locations3[i][8] =='undefined'){ button_text ='';} else { button_text = locations3[i][8];}
		   if (locations3[i][9] =='undefined'){ img1 ='';} else { img1 = locations3[i][9];}
		   if (locations3[i][10] =='undefined'){ img2 ='';} else { img2 = locations3[i][10];}
		   if (locations3[i][11] =='undefined'){ img3 ='';} else { img3 = locations3[i][11];}
		   if (locations3[i][12] =='undefined'){ pinid ='';} else { pinid = locations3[i][12];}

            marker3 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations3[i][5], locations3[i][6]),
                map: map3,
                title: locations3[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker3, map3, locations3[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker3);
     }

}



//Map For Chicago----------------------------------------------------------------------
        var mapElement4 = document.getElementById('map4');

if(mapElement4!=null&&mapElement4!=''){
        var map4 = new google.maps.Map(mapElement4, mapOptions);
        var locations4 = [
['3201 W Armitage Ave', 'Scofflaw', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#scofflaw', 41.917317,-87.706548, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img1.jpg', 'common/images/chicago_img2.jpg', 'common/images/chicago_img3.jpg','1'],
['3025 W Diversey Ave', 'Cellar Door Provisions', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#cellar-door-provisions', 41.931997,-87.703128, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img4.jpg', 'common/images/chicago_img5.jpg', 'common/images/chicago_img6.jpg','2'],
['2651 N Milwaukee Ave', 'Fleur', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#fleur', 41.930023,-87.708677, 'common/images/map-icon2.png','Read More', 'common/images/chicago_img7.jpg', 'common/images/chicago_img8.jpg', 'common/images/chicago_img9.jpg','3'],
['2950 N Oakley Ave', 'Vosges Haut-Chocolat', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#vosges-haut-chocolat', 41.935457,-87.685670, 'common/images/map-icon2.png','Read More', 'common/images/chicago_img10.jpg', 'common/images/chicago_img11.jpg', 'common/images/chicago_img12.jpg','4'],
['2627 N Kedzie Ave', 'Meyvn', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#meyvn', 41.929256,-87.707162, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img13.jpg', 'common/images/chicago_img14.jpg', 'common/images/chicago_img15.jpg','5']
        ];
        for (i = 0; i < locations4.length; i++) {
			if (locations4[i][1] =='undefined'){ description ='';} else { description = locations4[i][1];}
			if (locations4[i][2] =='undefined'){ telephone ='';} else { telephone = locations4[i][2];}
			if (locations4[i][3] =='undefined'){ email ='';} else { email = locations4[i][3];}
           if (locations4[i][4] =='undefined'){ web ='';} else { web = locations4[i][4];}
           if (locations4[i][7] =='undefined'){ markericon ='';} else { markericon = locations4[i][7];}
		   if (locations4[i][8] =='undefined'){ button_text ='';} else { button_text = locations4[i][8];}
		   if (locations4[i][9] =='undefined'){ img1 ='';} else { img1 = locations4[i][9];}
		   if (locations4[i][10] =='undefined'){ img2 ='';} else { img2 = locations4[i][10];}
		   if (locations4[i][11] =='undefined'){ img3 ='';} else { img3 = locations4[i][11];}
		   if (locations4[i][12] =='undefined'){ pinid ='';} else { pinid = locations4[i][12];}

            marker4 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations4[i][5], locations4[i][6]),
                map: map4,
                title: locations4[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker4, map4, locations4[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker4);
     }

}




//bindInfoWindow definition
function bindInfoWindow(marker, map, title, desc, telephone, email, web, link, button_text, img1, img2, img3,pinid) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());

           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
                   iw.close();
                   infoWindowVisible(false);


				   var html;

				   if(img3==null||img3==''){
                    html= '<div class="headings" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><span>'+title+'</span><h3>'+desc+'</h3></div><div class="slider_sec" style="float:left; width:100%; text-align:center; position:relative;"><div class="img_slider" style="float:left; width:100%; text-align:center;"><img src="'+img1+'" alt=""><img src="'+img2+'" alt=""></div><div class="paging"></div><div class="next_img"></div></div><div class="map_popup" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><a class="'+web+'" target="_blank" href="'+link+'">'+button_text+'</a></div>';
					   }else{
                    html= '<div class="headings" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><span>'+title+'</span><h3>'+desc+'</h3></div><div class="slider_sec" style="float:left; width:100%; text-align:center; position:relative;"><div class="img_slider" style="float:left; width:100%; text-align:center;"><img src="'+img1+'" alt=""><img src="'+img2+'" alt=""><img src="'+img3+'" alt=""></div><div class="paging"></div><div class="next_img"></div></div><div class="map_popup" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><a class="'+web+'" target="_blank" href="'+link+'">'+button_text+'</a></div>';
						   }

                   iw = new google.maps.InfoWindow({content:html,maxWidth: 300});
                   iw.open(map,marker);
                   infoWindowVisible(true);




   // Reference to the DIV which receives the contents of the infowindow using jQuery
   var iwOuter = $('.gm-style-iw');
   /* The DIV we want to change is above the .gm-style-iw DIV.
    * So, we use jQuery and create a iwBackground variable,
    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
    */
   var iwBackground = iwOuter.prev();
   // Remove the background shadow DIV
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});
   // Remove the white background DIV
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});

// To Customize arrow css
   iwBackground.children(':nth-child(3)').find('div:nth-child(1)').children().css({'box-shadow': '-5px 0 10px rgba(0, 0, 0, 0.2)','z-index': '999','height':'15px','width':'15px','left':'0px','transform':'skewX(45deg)'});
   iwBackground.children(':nth-child(3)').find('div:nth-child(2)').children().css({'box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)','z-index': '999','height':'15px','width':'15px','transform':'skewX(-45deg)'});



	//To Intiate Slider Inside Infowindow
   $('.gm-style-iw').find('div.img_slider').cycle({ fx:'fade', slides:'> img', speed:800,timeout:2000, pauseOnHover: true, pager:'.paging', swipe:true,timeout:3000,next:'.next_img' });

	$('.gm-style-iw').find('div.map_popup a').on('click', function() {
		utag.link({ "click_id": this.hash.substr(1) });
    });


   //To Place active state icon on marker
	for (var j = 0; j < markers.length; j++) {
      markers[j].setIcon({url:"common/images/map-icon2.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});
    }
    marker.setIcon({url:"common/images/map-icon1.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});

   //Add and remove active class on thumb
    $('.thumb_container .thumb_box').removeClass('active');
    $('#thumb'+pinid).addClass('active');

   //To Scroll the relative thumb into view on left side
   var pane = $('.left_sec');
   var api = pane.data('jsp');
   api.scrollToY(parseInt($('#thumb'+pinid).position().top));
   map.setCenter(marker.getPosition());

        });


   google.maps.event.addListener(iw, 'closeclick', function () {
         infoWindowVisible(false);
      });



//change map center on resize window
var currCenter = map.getCenter();
	$(window).on('resize', function () {
		for (var j = 0; j < markers.length; j++) {
      markers[j].setIcon({url:"common/images/map-icon2.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});
    }
	$('.thumb_container .thumb_box').removeClass('active');
  iw.close();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(currCenter);
});




 }



    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.thumb_box a.btn_overlay').on('click', function () {
        google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
    });


}//Ending Of init function
