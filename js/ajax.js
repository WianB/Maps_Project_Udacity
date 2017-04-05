//Wikipedia API Handling
// load wikipedia data
/*

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
        for (var i = 0; i < articleList.length; i++){
            var articleStr = articleList[i];
            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
            $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
        };
        clearTimeout(wikiRequestTimeout);
    }
});


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


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/oauth2/token",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "e6b47e4c-c497-4f4d-daf1-b09d42ab311a",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "client_id": "mjQBU8XAp8_2PJ7CKtzxQw",
    "client_secret": "MRwFdJQMbU6GMrOyOHKGpM6ggl9JUMhYXFnWEuaCTyS0Nbw6QB598XwT4NcnLamp",
    "grant_type": "client_credentials"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

function populateMarker(marker){

}




/*


$.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco",
  "method": "GET",
  "headers": {
    "authorization": "Bearer",
    "cache-control": "no-cache",
    "postman-token": "b5c0fe60-a093-d282-4127-b2f64c9cecbb"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

*/
