var ypos,HomeSection,Logo;
var OldScrolltop=0;
var Menu= false;
var Projects= [];

particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 50,
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

SetNavCircleColor(1);
$(window).ready(function(){
    Projects = GetProjects();
    
});
$(document).ready(function() {
	$('#fullpage').fullpage({scrollBar:true});
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

    function ScrollToNextSection(){
        if (window.matchMedia("(min-width: 768px)").matches) {
            console.log("ScrolltoNext");
            var scrollTop = $(this).scrollTop();
            var windowHeight = $(window).height();
            var SectionNum=0;
            var sections= [];
            $('section').each(function(){
                sections.push('#' + ($(this).attr('id')));
            });
            //particlesJS.enable = false;
            switch (true) {
                        case (scrollTop<50):
                        SectionNum =0
                        //particlesJS.enable = true;
                        SetNavCircleColor(1);
                        break;
                        case (scrollTop>windowHeight-200 && scrollTop<windowHeight+200):
                        SectionNum =1;
                        SetNavCircleColor(2);
                        break;
                        case (scrollTop>windowHeight*2-200 && scrollTop<windowHeight*2+200):
                        SectionNum =2;
                        SetNavCircleColor(3);
                        break;
                        case (scrollTop>windowHeight*3-200 && scrollTop<windowHeight*3+200):
                        SectionNum =3;
                        SetNavCircleColor(4);
                        break;
                        case (scrollTop>windowHeight*4-200 && scrollTop<windowHeight*4+200):
                        SectionNum =4;
                        SetNavCircleColor(5);
                        break;
                        case (scrollTop>windowHeight*5-200 && scrollTop<windowHeight*5+200):
                        SectionNum =5;
                        break;
                        case (scrollTop>windowHeight*6-200 && scrollTop<windowHeight*6+200):
                        SectionNum =6;
                        break;
                    }
                    
            console.log(SectionNum);
            console.log(scrollTop);
            if (scrollTop > OldScrolltop){
                // downscroll code
                console.log("downscroll");
                AllerA(sections[SectionNum+1]);
            } else {
                // upscroll code
                console.log("upscroll");
            AllerA(sections[SectionNum-1]);
            }
            }
        
        }
    function MenuClick(Element) {
        Menu = true;
        console.log('MenuClick : ' + Menu);  
        AllerA(Element);

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
	function initNavProgress() {
            var PosProgress = 40;
            var heightProgress = 20;
            for (var i=1;i<=7;i++) {
                $('#Section'+ i + '-Circle').css({top: PosProgress+(i-1)*heightProgress/6 + '%'});
            }
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
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.7649915, lng: 4.8850808},
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
                    ] });
        }
    function GetProjects() {
        
        $.getJSON("http://mathieubertecreations.com/Site-Perso/js/Projects.json", function(data){
            Projects= data;
            console.log(Projects);
        })
    }
    function PaintProject(ID) {
        var Project = $.grep(Projects, function(e){ return e.ID === ID;});
        $('#Project-Img').attr("src", Project[0].Picture);
        $('#Project-Title').html(Project[0].Title);
        $('#Project-Description').html(Project[0].Description);
    }
    