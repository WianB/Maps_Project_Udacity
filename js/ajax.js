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



var apiURL = 'https://api.foursquare.com/v2/venues/';
var foursquareClientID = '4BFPNT252ZLDNQWFVSRME02CJXE2TX5DCOYO55L5IKSLXBXW'
var foursquareSecret ='3RIGZFR5P1PGNWKTQPUZ1DS52RWSAMODM2K2D52GBV3X2JTV';
var foursquareVersion = '20170112';
var venueFoursquareID = "4b4aac62f964a520a98c26e3";

var foursquareURL = apiURL + venueFoursquareID + '?client_id=' + foursquareClientID +'&client_secret=' + foursquareSecret +'&v=' + foursquareVersion;

$.ajax({
  url: foursquareURL,
  success: function(data) {
    console.log(data.response);
    console.log(data.response.venue.name);
    console.log(data.response.venue.rating);
  }
});













//Ajax request for Yelp API OATH2 as per Postman code


/*
$.ajax({
    async: true,
    crossDomain: true,
    url: "https://api.yelp.com/oauth2/token",
    method: "POST",
    "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "f9f5ba08-f675-dd4f-9986-415d9749a9e2"
  },
    "data": {
        "client_id": "mjQBU8XAp8_2PJ7CKtzxQw",
        "client_secret": "MRwFdJQMbU6GMrOyOHKGpM6ggl9JUMhYXFnWEuaCTyS0Nbw6QB598XwT4NcnLamp",
        "grant_type": "client_credentials"
    },

    success: function(response) {
        console.log(response);
        console.log("The function has been successfull")

    }


})


function populateMarker(marker) {

}



function populateMarker(marker){
  var yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972'
  console.log(yelpUrl);
  $.ajax({
      url: yelpUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function(response) {
          var articleList = response[1];
          console.log(articleList);
          for (var i = 0; i < articleList.length; i++) {

          };
          clearTimeout(wikiRequestTimeout);
      }
  });


}

*/
