//Wikipedia API Handling
// load wikipedia data


var $wikiElem = $('.wiki-articles');
var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + 'Sydney' + '&format=json&callback=wikiCallback';
var wikiRequestTimeout = setTimeout(function() {
    $wikiElem.text("failed to get wikipedia resources");
}, 8000);

$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(response) {
        var articleList = response[1];
        for (var i = 0; i < articleList.length; i++) {
            var articleStr = articleList[i];
            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
            $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
        };
        clearTimeout(wikiRequestTimeout);
    }
});

//Ajax foursqaure
//Referenced some of the example code of the udacity blog.

function populateMarker(marker,infowindow) {
    var apiURL = 'https://api.foursquare.com/v2/venues/';
    var foursquareClientID = '4BFPNT252ZLDNQWFVSRME02CJXE2TX5DCOYO55L5IKSLXBXW'
    var foursquareSecret = '3RIGZFR5P1PGNWKTQPUZ1DS52RWSAMODM2K2D52GBV3X2JTV';
    var foursquareVersion = '20170112';
    var venueFoursquareID = locations[marker.id].foursquareId;
    var foursqaureTimeout = setTimeout(function() {
          infowindow.setContent('<div>' + 'Can not retrieve information' + '</div>');
    }, 8000);
    var rating;
    var checkins;
    var foursquareURL = apiURL + venueFoursquareID + '?client_id=' + foursquareClientID + '&client_secret=' + foursquareSecret + '&v=' + foursquareVersion;

    $.ajax({
        url: foursquareURL,
        success: function(data) {
            rating = data.response.venue.rating;
            checkins = data.response.venue.stats.checkinsCount;

            if( rating == undefined || rating == null ){
              rating = 'Data can not be retrieved';
            }

            if( checkins == undefined || checkins == null ){
              checkins = 'Data can not be retrieved';
            }
            infowindow.setContent('<div>' + marker.title + '</div><br><p> Rating: ' + rating +' </p>' + '<br><p> Checkins: ' + checkins +' </p>');
            clearTimeout(foursqaureTimeout);
        }
    });



}
