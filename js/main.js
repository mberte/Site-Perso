var ypos,HomeSection,Logo;
var OldScrolltop=0;
var Menu= false;
var Projects= [];

particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
    }

);
// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var Nav = document.querySelector("nav");
  var Nav_a = document.querySelectorAll(".a-menu");
  var Nav_Circle = document.querySelectorAll(".Nav-Circle");
  var Nav_text = document.querySelectorAll(".Nav-Text")

  // On click
  hamburger.addEventListener("click", function() {
    ToggleMenu();
  });
SetNavCircleColor(1);
$(window).ready(function(){
    Projects = GetProjects();
    
});
$(document).ready(function() {
    $('#fullpage').fullpage({
            menu: '#menu',
            anchors: ['Home-a', 'About-Me-a', 'Objectives-a', 'Approach-a', 'Skills-a', 'Projects-a', 'Contact-Me-a'],
            scrollBar:true});
	
});
$(window).on('scroll', parallex);
$(window).on('scroll', function(){
    var scrollTop;
    scrollTop = $(this).scrollTop();
    
    CalcTransform(scrollTop);
    var DocHeight = $(document).height();
    var ContactSectionHeight = $('#Contact-Me').height();
    $('#Nav-Progress').height( 60*scrollTop/(DocHeight-ContactSectionHeight) + '%'); 	
})
    function parallex() {
        HomeSection = document.getElementById('Home');
        Logo = document.getElementById('logo');
        ypos = window.pageYOffset;

        if((ypos> HomeSection.offsetHeight-100 && ypos< HomeSection.offsetHeight*3 -100 ) || ypos> HomeSection.offsetHeight*4 -100) {
            Logo.src = "images/Logo fini.svg";
        }else{
            Logo.src = "images/Logo fini blanc.svg";
        }

        }
    function CalcTransform(scrollTop){

            var ShapePosX;
            var ShapePosY;
            var SkewX;
            var windowHeight = $(window).height();
            var WhiteShape =$('#WhiteShape');

            //From Home to About me animation
            if (scrollTop<windowHeight) { 
                ShapePosX = -100+(scrollTop)*(50/(windowHeight));
                ShapePosY = windowHeight-scrollTop;	
                SkewX = 30*scrollTop/windowHeight;
                
            }

            //From About me to Objective animation
            if (scrollTop>windowHeight && scrollTop<windowHeight*2) {
                ShapePosX = -50;
                ShapePosY = 0;
                SkewX = 30+(scrollTop-windowHeight)*(-60/(windowHeight));	
                
            }

            //From Objective to Approch animation
            if (scrollTop>windowHeight*2 && scrollTop<windowHeight*3) {
                ShapePosX = -50-(scrollTop-windowHeight*2)*(50/(windowHeight))-1.5;
                SkewX = -30+(scrollTop-windowHeight*2)*(30/(windowHeight));
                ShapePosY = 0;
            }

            //From Approch to Skills animation
            if (scrollTop>windowHeight*3 && scrollTop<windowHeight*4) {
                ShapePosX = -100+(scrollTop-windowHeight*3)*(50/(windowHeight));
                SkewX = (scrollTop-windowHeight*3)*(15/(windowHeight))
                ShapePosY = 0;
            }

            //From Skills to Projects animation
            if (scrollTop>windowHeight*4 && scrollTop<windowHeight*5) {
                SkewX = 15+(scrollTop-windowHeight*4)*(-30/(windowHeight))
                ShapePosY = 0;
                ShapePosX =-50;
            }
            //From Projects to Contat Me animation
            if (scrollTop>windowHeight*5 && scrollTop<windowHeight*6) {
                SkewX = -15+(scrollTop-windowHeight*5)*(15/(windowHeight))
                ShapePosX = -50+(scrollTop-windowHeight*5)*(50/(windowHeight));
                ShapePosY = 0;
            }
            WhiteShape.css({transform: 'skewX('+ SkewX + 'deg) translate('+ ShapePosX +'%, '+ ShapePosY + 'px)'});
        }
    function throttle(callback, delay){
        var last = 0;
        return function() {
            
            var now = +new Date();
            var context = this;
            var args = arguments
            if(now > last + delay && !Menu){
                console.log('Menu in throttle : ' + Menu);
                callback.apply(context,args);
                last=now;
                }
            }      
        }
    function MenuClick(Element) {
        Menu = true;
        console.log('MenuClick : ' + Menu);  
        AllerA(Element);
        
        if(hamburger.classList.contains('is-active')){
            ToggleMenu();
        }
    }
        
    function AllerA (Element) {
        $("html, body").animate({
            scrollTop: $(Element).offset().top
        }, 700, function(){
            
            OldScrolltop = $(this).scrollTop();
            Menu = false;
            console.log('AllerA Menu : ' + Menu);  
            console.log('Oldscrolltop : ' + OldScrolltop);  
        });
         $(Element + ' h1, h2, p').removeClass('animated fadeInUp' );
            $(Element + ' h1, h2, p').addClass('animated fadeInUp' );
		
        }
	
	function SetNavCircleColor(SectionNum) {
        for (var i=1;i<= SectionNum;i++) {
        $('#Section'+ i + '-Circle').css('background-color', '#33bcf0');
        }
            for (var i=SectionNum+1;i<=7;i++) {
                $('#Section'+ i + '-Circle').css('background-color', '#414A65');
            }
            
        }

    function initMap() {
        var Center = {lat: 45.7649915, lng: 4.8850808};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: Center,
          zoom: 13,
            styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#616161"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#ffffff"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#dadada"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#616161"
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                        ]
                    }
                    ] 
        });
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 class="Text-cyan">Mathieu Berte</h2>'+
            '<div class="Map-data-cont">'+
                '<img class="Map-data-img" src="images/location.svg"/>'+
                '<p class="Text-white Map-data-txt">47 Rue Docteur Ollier<br>'+
                '69100 Villeurbanne<br>'+
                'France</p>'+
            '</div>'+
            '<div class="Map-data-cont">'+
                '<img class="Map-data-img" src="images/phone.svg"/>'+
                '<p class="Text-white Map-data-txt">+33 (0)6 87 19 36 96</p>'+
            '</div>'+
            '<div class="Map-data-cont">'+
                '<img class="Map-data-img" src="images/email.svg"/>'+
                '<p class="Text-white Map-data-txt">mathieu.berte@gmail.com</p>'+
                '<div class="social">'+
                    '<img class="Social-Btn" src="images/linkedin-btn.svg"/>'+
                    '<img class="Social-Btn" src="images/twitter-btn.svg">'+         
                '</div>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: Center,
          map: map,
          title: 'Uluru (Ayers Rock)'
          
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
        google.maps.event.addListener(infowindow, 'domready', function() {

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


            // Moves the shadow of the arrow 76px to the left margin 
            iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

            // Moves the arrow 76px to the left margin 
            iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
            // Changes the desired color for the tail outline.
            // The outline of the tail is composed of two descendants of div which contains the tail.
            // The .find('div').children() method refers to all the div which are direct descendants of the previous div. 
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1', 'background-color' : '#282E41'});
            
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            iwCloseBtn.css({
                opacity: '1', // by default the close button has an opacity of 0.7
                right: '-35px', top: '23px', // button repositioning
                });

                // The API automatically applies 0.7 opacity to the button after the mouseout event.
                // This function reverses this event to the desired value.
                iwCloseBtn.mouseout(function(){
                $(this).css({opacity: '1'});
                });
        });
    }
    function GetProjects() {
        
        $.getJSON("https://mathieubertecreations.com/Site-Perso/js/Projects.json", function(data){
            Projects= data;
            console.log(Projects);
        })
    }
    function PaintProject(ID) {
        var Project = $.grep(Projects, function(e){ return e.ID === ID;});
        $('#Project-Img').attr("src", Project[0].Picture);
        $('#Project-Title').html(Project[0].Title);
        $('#Project-Description').html(Project[0].Description);
        ToggleProjectDetails();
    }
    function ToggleMenu() {
   
        hamburger.classList.toggle("is-active");
        Nav.classList.toggle("nav-menu-open");
        document.querySelector("#menu").classList.toggle("xs-menu");
        var i;
        for (i = 0; i < Nav_a.length; i++) {
            Nav_a[i].classList.toggle("a-menu-open");
        }
        for (i = 0; i <  Nav_text.length; i++) {
            Nav_text[i].classList.toggle("Nav-Text-menu");
        }
        for (i = 0; i < Nav_Circle.length; i++) {
            Nav_Circle[i].classList.toggle("Nav-Circle-menu");
        }
        
    }
    function ToggleProjectDetails() {
        var ProjectDetails = document.querySelector(".Project-details");
        ProjectDetails.classList.toggle("Project-details-closed");
    }