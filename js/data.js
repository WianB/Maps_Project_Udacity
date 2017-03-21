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
        }
    },
    {
        title: 'Ivy Bar',
        type: 'Bar',
        location: {
            lat: -33.866615,
            lng: 151.207464
        }
    },
    {
        title: 'Trill Sydney',
        type: 'Club',
        location: {
            lat: -33.879987,
            lng: 151.216292
        }
    },
    {
        title: 'Hudson Ballroom',
        type: 'Club',
        location: {
            lat: -33.876215,
            lng: 151.205009
        }
    },
    {
        title: 'Pool Club',
        type: 'Cafe',
        location: {
            lat: -33.865880,
            lng: 151.207570
        }
    },
    {
        title: 'The Argyle',
        type: 'Club',
        location: {
            lat: -33.858481,
            lng: 151.207777
        }
    },

    {
        title: 'Club Burwood',
        type: 'Club',
        location: {
            lat: -33.875578,
            lng: 151.103960
        }
    },

    {
        title: 'Chester Hill Bowling Club',
        type: 'Club',
        location: {
            lat: -33.877101,
            lng: 150.996248
        }
    },

    {
        title: 'Iron Chef',
        type: 'Restaurant',
        location: {
            lat: -33.889343,
            lng: 150.941260
        }
    },
    {
        title: 'Lee Hing',
        type: 'Restaurant',
        location: {
            lat: -33.972004,
            lng: 151.077624
        }
    }
];
