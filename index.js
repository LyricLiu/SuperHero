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

var getCoord = function(locationName, callback) {
    var https = require('https');
    locationName = encodeURIComponent(locationName);
    var key = 'AIzaSyB0fra7B-r4Eaf1znubMEe_-wr93QZzNno';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + locationName + '&key=' + key;
    https.get(url, function(response) {
        var dataString = '';

        response.setEncoding('utf-8');
        response.on('data', function(chunk) {
            dataString += chunk;
        });

        response.on('end', function() {
            var data = JSON.parse(dataString);
            if (data.results[0]) {
                var location = data.results[0].geometry.location;
                callback(location);
            };
        });
    });
}

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var data = [];
var lastTime = Date.now();
var nowTime;
var outputPoint;
var pointLat;
var pointLng;

var stream4 = T.stream('statuses/filter', { track: ['#Iron Man', '#Ironman', '#IronMan', 'Iron Man', 'IronMan', 'Ironman', 'iron man', 'Ironman'] });
var stream8 = T.stream('statuses/filter', { track: ['#Captain America', '#ICaptainAmerica', 'captainamerica', 'Captain America', 'CaptainAmerica', 'captain america', 'captainamerica'] });
var stream1 = T.stream('statuses/filter', { track: ['#Super Man', '#Superman', '#SuperMan', 'Super Man', 'SuperMan', 'Superman', 'Super man', 'super man'] });
var stream2 = T.stream('statuses/filter', { track: ['#Spider Man', '#Spiderman', '#SpiderMan', 'Spider Man', 'SpiderMan', 'Spiderman', 'Spider man', 'spider man'] });
var stream3 = T.stream('statuses/filter', { track: ['#Black Widow', '#Black Widow', '#Blackwidow', 'Black Widow', 'BlackWidow', 'Black widow', 'Blackwidow', 'black widow'] });
var stream6 = T.stream('statuses/filter', { track: ['#Wonder Woman', '#Wonder woman', '#WonderWoman', 'Wonder Woman', 'WonderWoman', 'Wonder woman', 'Wonderwoman', 'wonder woman'] });
var stream5 = T.stream('statuses/filter', { track: ['#Bat Man', '#Batman', '#BatMan', 'Bat Man', 'BatMan', 'Batman', 'Bat man', 'bat man'] });
var stream7 = T.stream('statuses/filter', { track: ['#Thor', '#thor', '#THOR', 'Thor', 'thor', 'THOR'] });

stream1.on('tweet', function(tweet) {
    count1++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count1);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet1', {
                user1: tweet.user.screen_name,
                text1: tweet.text,
                pointLat1: pointLat,
                pointLng1: pointLng,
                sum1: count1,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet1', {
                user1: tweet.user.screen_name,
                text1: tweet.text,
                pointLat1: pointLat,
                pointLng1: pointLng,
                sum1: count1,
            });
        });
    }
});

stream2.on('tweet', function(tweet) {
    count2++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count2);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet2', {
                user2: tweet.user.screen_name,
                text2: tweet.text,
                pointLat2: pointLat,
                pointLng2: pointLng,
                sum2: count2,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet2', {
                user2: tweet.user.screen_name,
                text2: tweet.text,
                pointLat2: pointLat,
                pointLng2: pointLng,
                sum2: count2,
            });
        });
    }
});

stream3.on('tweet', function(tweet) {
    count3++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count3);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet3', {
                user3: tweet.user.screen_name,
                text3: tweet.text,
                pointLat3: pointLat,
                pointLng3: pointLng,
                sum3: count3,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet3', {
                user3: tweet.user.screen_name,
                text3: tweet.text,
                pointLat3: pointLat,
                pointLng3: pointLng,
                sum3: count3,
            });
        });
    }
});

stream4.on('tweet', function(tweet) {
    count4++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count4);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet4', {
                user4: tweet.user.screen_name,
                text4: tweet.text,
                pointLat4: pointLat,
                pointLng4: pointLng,
                sum4: count4,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet4', {
                user4: tweet.user.screen_name,
                text4: tweet.text,
                pointLat4: pointLat,
                pointLng4: pointLng,
                sum4: count4,
            });
        });
    }
});

stream5.on('tweet', function(tweet) {
    count5++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count5);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet5', {
                user5: tweet.user.screen_name,
                text5: tweet.text,
                pointLat5: pointLat,
                pointLng5: pointLng,
                sum5: count5,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet5', {
                user5: tweet.user.screen_name,
                text5: tweet.text,
                pointLat5: pointLat,
                pointLng5: pointLng,
                sum5: count5,
            });
        });
    }
});

stream6.on('tweet', function(tweet) {
    count6++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count6);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet6', {
                user6: tweet.user.screen_name,
                text6: tweet.text,
                pointLat6: pointLat,
                pointLng6: pointLng,
                sum6: count6,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet6', {
                user6: tweet.user.screen_name,
                text6: tweet.text,
                pointLat6: pointLat,
                pointLng6: pointLng,
                sum6: count6,
            });
        });
    }
});

stream7.on('tweet', function(tweet) {
    count7++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count7);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet7', {
                user7: tweet.user.screen_name,
                text7: tweet.text,
                pointLat7: pointLat,
                pointLng7: pointLng,
                sum7: count7,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet7', {
                user7: tweet.user.screen_name,
                text7: tweet.text,
                pointLat7: pointLat,
                pointLng7: pointLng,
                sum7: count7,
            });
        });
    }
});

stream8.on('tweet', function(tweet) {
    count8++;
    nowTime = Date.now();
    if (nowTime - lastTime > 1000) {
        console.log(count8);
        lastTime = nowTime;
    }
    if (tweet.coordinates) {
        if (tweet.coordinates !== null) {
            outputPoint = { "lat": tweet.coordinates.coordinates[0], "lng": tweet.coordinates.coordinates[1] };
            pointLat = tweet.coordinates.coordinates[0];
            pointLng = tweet.coordinates.coordinates[1];
            io.sockets.volatile.emit('tweet8', {
                user8: tweet.user.screen_name,
                text8: tweet.text,
                pointLat8: pointLat,
                pointLng8: pointLng,
                sum8: count8,
            });
        }
    } else if (tweet.user.location) {
        getCoord(tweet.user.location, function(coord) {
            pointLat = coord.lat;
            pointLng = coord.lng;
            io.sockets.volatile.emit('tweet8', {
                user8: tweet.user.screen_name,
                text8: tweet.text,
                pointLat8: pointLat,
                pointLng8: pointLng,
                sum8: count8,
            });
        });
    }
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