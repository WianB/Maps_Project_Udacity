//Map style

var style = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];


//Club database with relevant positions
var locations = [{
        title: 'The Bank Night Club',
        type: 'Club',
        location: {
            lat: -33.875704,
            lng: 151.224171
        },
        foursquareId:'4c2f3ce83896e21ea085e390',
    },
    {
        title: 'Ivy Bar',
        type: 'Bar',
        location: {
            lat: -33.866615,
            lng: 151.207464
        },
        foursquareId:'4b058760f964a520d78e22e3',
    },
    {
        title: 'Trill Sydney',
        type: 'Club',
        location: {
            lat: -33.879987,
            lng: 151.216292
        },
        foursquareId:'5479c55f498edcb60096f57a',
    },
    {
        title: 'Hudson Ballroom',
        type: 'Club',
        location: {
            lat: -33.876215,
            lng: 151.205009
        },
        foursquareId:'589d8e26f776b07707849c2f',
    },
    {
        title: 'Pool Club',
        type: 'Cafe',
        location: {
            lat: -33.865880,
            lng: 151.207570
        },
        foursquareId:'4b48eeb2f964a520065e26e3',
    },
    {
        title: 'The Argyle',
        type: 'Club',
        location: {
            lat: -33.858481,
            lng: 151.207777
        },
        foursquareId:'4b058760f964a520ae8e22e3',
    },

    {
        title: 'Club Burwood',
        type: 'Club',
        location: {
            lat: -33.875578,
            lng: 151.103960
        },
        foursquareId:'4d5f85ac1939a35dc56e16ee',
    },

    {
        title: 'Chester Hill Bowling Club',
        type: 'Club',
        location: {
            lat: -33.877101,
            lng: 150.996248
        },
        foursquareId:'4dcf866645ddbe15f8a507ac',
    },

    {
        title: 'Iron Chef',
        type: 'Restaurant',
        location: {
            lat: -33.889343,
            lng: 150.941260
        },
        foursquareId:'4b380bdaf964a520cd4a25e3',
    },
    {
        title: 'Lee Hing',
        type: 'Restaurant',
        location: {
            lat: -33.972004,
            lng: 151.077624
        },
        foursquareId:'4e10507222713f7d7bc713f6',
    }
];
