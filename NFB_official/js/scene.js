//$(document).ready(function() {

 
//});

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "stylers": [
            {
                "hue": "#00aaff"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 2.15
            },
            {
                "lightness": 12
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 24
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 57
            }
        ]
    }
]
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['海寧的家', 25.116812, 121.517191],
        ['大國民出版社', 25.024524, 121.528250],
        ['田欣精品店', 25.030480, 121.530207],
        ['光箭快遞店', 25.024524, 121.527961]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
    
        ['<div class="info_content map001">' +
        '<h4>海寧的家</h4>'+
        '<img class="map_img" src="../img/scene/001.jpg">'+
        '<p>第一集海寧與田欣悠閒的喝著下午茶，以及田天彈奏著悠揚琴聲的相親場景，都是來自於這間茶館。拍攝劇組找到這間隱身在北投巷弄中的玻璃屋，充滿英式古典氛圍的莊園造景，搭配屋內擺設各式英國瓷器，營造出置身英國小鎮的氛圍。</p>' + 
        '</div>'],

        ['<div class="info_content map002">' +
        '<h4 >大國民出版社</h4>'+
        '<img class="map_img" src="../img/scene/002.jpg">'+
        '<p>第一集海寧與田欣悠閒的喝著下午茶，以及田天彈奏著悠揚琴聲的相親場景，都是來自於這間茶館。拍攝劇組找到這間隱身在北投巷弄中的玻璃屋，充滿英式古典氛圍的莊園造景，搭配屋內擺設各式英國瓷器，營造出置身英國小鎮的氛圍。</p>' + 
        '</div>'],

        ['<div class="info_content map003">' +
        '<h4 >田欣精品店</h4>'+
        '<img class="map_img" src="../img/scene/003.jpg">'+
        '<p>第一集海寧與田欣悠閒的喝著下午茶，以及田天彈奏著悠揚琴聲的相親場景，都是來自於這間茶館。拍攝劇組找到這間隱身在北投巷弄中的玻璃屋，充滿英式古典氛圍的莊園造景，搭配屋內擺設各式英國瓷器，營造出置身英國小鎮的氛圍。</p>' + 
        '</div>'],

        ['<div class="info_content map004">' +
        '<h4 >光箭快遞店</h4>'+
        '<img class="map_img" src="../img/scene/004.jpg">'+
        '<p>第一集海寧與田欣悠閒的喝著下午茶，以及田天彈奏著悠揚琴聲的相親場景，都是來自於這間茶館。拍攝劇組找到這間隱身在北投巷弄中的玻璃屋，充滿英式古典氛圍的莊園造景，搭配屋內擺設各式英國瓷器，營造出置身英國小鎮的氛圍。</p>' + 
        '</div>']


        
        /*['<div class="info_content">' +
        '<h4 >卡提薩克英式茶館 <span>台北市大安區復興南路一段295巷16號</span></h4>'+
        '<img class="map_img" src="../img/scene/001.jpg">'+
        '<p>第一集海寧與田欣悠閒的喝著下午茶，以及田天彈奏著悠揚琴聲的相親場景，都是來自於這間茶館。拍攝劇組找到這間隱身在北投巷弄中的玻璃屋，充滿英式古典氛圍的莊園造景，搭配屋內擺設各式英國瓷器，營造出置身英國小鎮的氛圍。</p>' + 
        '</div>'],*/
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(  markers[i][1], 
                                                markers[i][2], 
                                                markers[i][3],
                                                markers[i][4]
                                                );
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12);
        google.maps.event.removeListener(boundsListener);
    });
    
}