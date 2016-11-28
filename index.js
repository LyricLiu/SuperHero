var Twit = require('twit');

var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

var http = require('http').Server(app); //serve the express

var io = require('socket.io')(http); //io is input and output

http.listen(8080, function() {
    console.log('app listening on port 8080.');
});

var T = new Twit({
    consumer_key: 'HL4ktb1EWaDTmrlUuBqsZeNgV',
    consumer_secret: 'EP7ToITkgp4YYJXrAJ502keB3foxrGaTOOAWsBkHku8EsicFco',
    access_token: '3373184979-KbBEUUfF7NZgdos1m3ALaEEsfcpLbCeLN1Zk5VI',
    access_token_secret: 'HNGbQLqnjjjqi7V51ZTHXFQpoDtT5h2GNFqkvKaUzFQq9'
});

var getCoord = function(locationName, callback){
    var https = require('https');
    locationName = encodeURIComponent(locationName);
    var key = 'AIzaSyB0fra7B-r4Eaf1znubMEe_-wr93QZzNno';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+locationName+'&key='+key;
    https.get(url, function(response){
        var dataString = '';

        response.setEncoding('utf-8');
        response.on('data', function (chunk) {   
            dataString += chunk;
        });

        response.on('end', function () {
            var data = JSON.parse(dataString);
            if (data.results[0]) {
                var location = data.results[0].geometry.location;
                callback(location);
            };
        });
    });    
}

var count = 0;
var data = [];
var lastTime = Date.now();
var nowTime;
var outputPoint;
var pointLat;
var pointLng;

var stream = T.stream('statuses/filter', { track: ['#Iron Man', '#Ironman', 'Iron Man', 'Ironman', 'iron man'] });
/*var stream = T.stream('statuses/filter', { track: ['#happy', '#Happy', 'happy', 'Happy'] });*/

stream.on('tweet', function(tweet) {
    count++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord){
            pointLat = coord.lat;
            pointLng = coord.lng;
            /*console.log(coord.lat);
            console.log(coord.lng);*/
        });
    }
    io.sockets.volatile.emit('tweet', {
        user: tweet.user.screen_name,
        text: tweet.text,
        pointLat: pointLat,
        pointLng: pointLng,
        sum: count,
    });
});

/*
stream.on('tweet', function(tweet){
		io.sockets.volatile.emit('tweet',{
		user:tweet.user.screen_name,
		text:tweet.text,
	  });
});

*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});