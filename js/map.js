var map;

// Create a new blank array for all the listing markers.
var markers = [];


//Global Google map variables
var largeInfowindow = null;
var bounds = null;

//Location view model that dynamically changes data and updates the view based on user input
var LocationModel = function(locations) {

    var self = this;

    //Location Selector
    self.typeSelector = ko.observable();

    //Locations info (to print)
    self.locationInfo = ko.observableArray([]);

    //Location variable
    self.locations = locations;

    //Drop down info
    self.dropDown = ko.observableArray(["All", "Clubs", "Restaurants", "Bar"]);

    self.showMapListings = function(){
      showListings();
      updateMapMarkers(self.locations);
    }

    self.addInfoWindow = function(name) {
        for (var i = 0; i < markers.length; i++) {
            if (name == markers[i].title && largeInfowindow !== null) {
                populateInfoWindow(markers[i], largeInfowindow);
            }
        }
    };

    //Monitors the selector
    self.typeSelector.subscribe(function(newValue) {
        if (newValue === "All") {
            self.locationInfo([]);
            self.locations = [];
            for (var i = 0; i < locations.length; i++) {
                self.locationInfo.push(locations[i].title);
                self.locations.push(locations[i]);
            }
            updateMapMarkers(self.locations);
        }
        if (newValue === "Clubs") {
            self.locationInfo([]);
            self.locations = [];
            for (var i = 0; i < locations.length; i++) {
                if (locations[i].type == "Club") {
                    self.locationInfo.push(locations[i].title);
                    self.locations.push(locations[i]);
                }
            }
            updateMapMarkers(self.locations);
        }
        if (newValue === "Restaurants") {
            self.locationInfo([]);
            self.locations = [];
            for (var i = 0; i < locations.length; i++) {
                if (locations[i].type == "Restaurant") {
                    self.locationInfo.push(locations[i].title);
                    self.locations.push(locations[i]);
                }
            }
            updateMapMarkers(self.locations);
        }
        if (newValue === "Bar") {
            self.locationInfo([]);
            self.locations = [];
            for (var i = 0; i < locations.length; i++) {
                if (locations[i].type == "Bar") {
                    self.locationInfo.push(locations[i].title);
                    self.locations.push(locations[i]);
                }
            }
            updateMapMarkers(self.locations);
        }
    }, this);
};

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -33.860518,
            lng: 151.199048
        },
        zoom: 13,
        styles: style,
        mapTypeControl: false
    });

    largeInfowindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();

    renderMapMarkers(locations);

    //Creates markers based on the value of select and initializes the location model
    ko.applyBindings(new LocationModel(locations));
}



// This function populates the infowindow when the marker is clicked.
function populateInfoWindow(marker, infowindow) {

    //Set all markers back to red_marker
    for(var i = 0; i< markers.length; i++){
      markers[i].setIcon('img/red_marker.png');
    }


    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;

        populateMarker(marker,infowindow);

        //infowindow.setContent('<div>' + marker.title + '</div><br><p> Rating: ' + populateMarker(marker)+'</p>');

        //infowindow.setContent(marker.id);
        infowindow.open(map, marker);
        marker.setIcon('img/orange_marker.png');
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            marker.setIcon('img/red_marker.png');
            infowindow.setMarker = null;
        });
    }
}

function renderMapMarkers(locations) {
    hideMapMarkers();
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: 'img/red_marker.png'
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);

        });
        //Extend bounds of the map to fit in all the markers
        bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
}

//Function to update map markers
function updateMapMarkers(locations) {
    hideMapMarkers();
    for (var i = 0; i < locations.length; i++) {
        for (var y = 0; y < markers.length; y++) {
            if (locations[i].title == markers[y].title) {
                markers[y].setVisible(true);

            }
        }
    }
}


//Hide the map markers
function hideMapMarkers() {
    //Hide map markers
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
}


//Can't load map function. Displays message on the website
function cantLoadMap(){
  $('#map').append("<h1>Can't Load the Map</h1>");
}


//Handles the click to show and hide burger menu for mobile website
$('.burger_menu').click(function() {
    if ($('.options-box').css('left') == "0px") {
        $('.options-box').removeClass("show_options-box");
    } else {
        $('.options-box').addClass("show_options-box");
    }
});
