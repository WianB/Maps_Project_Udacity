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
