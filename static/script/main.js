(function() {
    var canvas = document.getElementById('heroCanvas');
    var socket = io.connect();

    // Create our Planetary.js planet and set some initial values;
    // we use several custom plugins, defined at the bottom of the file
    var planet = planetaryjs.planet();
    planet.loadPlugin(autocenter({ extraHeight: -120 }));
    planet.loadPlugin(autoscale({ extraHeight: -120 }));
    planet.loadPlugin(planetaryjs.plugins.earth({
        topojson: { file: './static/world-110m.json' },
        oceans: { fill: '#262b41' },
        land: { fill: '#3d4259' },
        borders: { stroke: '#262b41' }
    }));
    planet.loadPlugin(planetaryjs.plugins.pings());
    planet.loadPlugin(planetaryjs.plugins.zoom({
        scaleExtent: [50, 5000]
    }));
    planet.loadPlugin(planetaryjs.plugins.drag({
        onDragStart: function() {
            this.plugins.autorotate.pause();
        },
        onDragEnd: function() {
            this.plugins.autorotate.resume();
        }
    }));
    planet.loadPlugin(autorotate(5));
    planet.projection.rotate([100, -10, 0]);
    planet.draw(canvas);


    //Navigator
    function show(a) {
        var a = document.getElementById(a);
        a.style.display = "block";
    }

    function hide(a) {
        var a = document.getElementById(a);
        a.style.display = "none";
    }

    var globalbar = document.getElementById('globalbar');
    var bargraph = document.getElementById('bargraph');
    var stream = document.getElementById('stream');

    globalbar.addEventListener("click", function() {
        show('global');
        show('heroCanvas');
        hide('bargraph-module');
        hide('stream-module');
        globalbar.style.backgroundImage = "url(./static/img/global.png)";
        bargraph.style.backgroundImage = "url(./static/img/barchart0.png)";
        stream.style.backgroundImage = "url(./static/img/stream0.png)";
    }, false);

    bargraph.addEventListener("click", function() {
        hide('global');
        show('bargraph-module');
        hide('stream-module');
        globalbar.style.backgroundImage = "url(./static/img/global0.png)";
        bargraph.style.backgroundImage = "url(./static/img/barchart.png)";
        stream.style.backgroundImage = "url(./static/img/stream0.png)";
    }, false);

    stream.addEventListener("click", function() {
        show('global');
        hide('heroCanvas');
        hide('bargraph-module');
        show('stream-module');
        globalbar.style.backgroundImage = "url(./static/img/global0.png)";
        bargraph.style.backgroundImage = "url(./static/img/barchart0.png)";
        stream.style.backgroundImage = "url(./static/img/stream.png)";
    }, false);

    //Global page
    var tweetList = $('ul.tweets');

    var supermanG = document.getElementById('superman');
    var spidermanG = document.getElementById('spiderman');
    var blackwidowG = document.getElementById('blackwidow');
    var captainamericaG = document.getElementById('captainamerica');
    var batmanG = document.getElementById('batman');
    var wonderwomanG = document.getElementById('wonderwoman');
    var thorG = document.getElementById('thor');
    var ironmanG = document.getElementById('ironman');
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var Lng1;
    var Lng2;
    var Lng3;
    var Lng4;
    var Lng5;
    var Lng6;
    var Lng7;
    var Lng8;
    var Lat1;
    var Lat2;
    var Lat3;
    var Lat4;
    var Lat5;
    var Lat6;
    var Lat7;
    var Lat8;
    var user1 = false;
    var user2 = false;
    var user3 = false;
    var user4 = false;
    var user5 = false;
    var user6 = false;
    var user7 = false;
    var user8 = false;
    var text1;
    var text2;
    var text3;
    var text4;
    var text5;
    var text6;
    var text7;
    var text8;


    socket.on('tweet', function(data) {
        var t = data.text;
        if (t.indexOf("Super") != -1 || t.indexOf("super") != -1 || t.indexOf("SUPER") != -1) {
            if(user1 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#319fd0', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#319fd0', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot1.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum1) / 0.4;
                $("#hero1").height(height);
                /*height1 = parseInt(sum1) / 0.8 + 52;
                $("#heroT1").style.bottom = "'" + height1 + "px'";
                if(height1 > 200){
                    $("#heroT1").style.display = "block";
                }*/
            }
            sum1++;
        } else if (t.indexOf("Spider") != -1 || t.indexOf("spider") != -1 || t.indexOf("SPIDER") != -1) {
            if(user2 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#c03f59', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#c03f59', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot2.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum2) / 0.4;
                $("#hero2").height(height);
                /*height1 = parseInt(sum2) / 0.8 + 47;
                $("#heroT2").style.bottom = "'" + height2 + "px'";
                if(height1 > 200){
                    $("#heroT2").style.display = "block";
                }*/
            }
            sum2++;
        } else if (t.indexOf("Black") != -1 || t.indexOf("black") != -1) {
            if(user3 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#080404', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#080404', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot3.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum3) / 0.4;
                $("#hero3").height(height);
                /*height1 = parseInt(sum3) / 0.8 + 52;
                $("#heroT3").style.bottom = "'" + height3 + "px'";
                if(height1 > 200){
                    $("#heroT3").style.display = "block";
                }*/
            }
            sum3++;
        } else if (t.indexOf("Captain") != -1 || t.indexOf("captain") != -1) {
            if(user4 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#0c6c8e', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#0c6c8e', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot4.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum4) / 0.4;
                $("#hero4").height(height);
                /*height1 = parseInt(sum4) / 0.8 + 48;
                $("#heroT4").style.bottom= "'" + height4 + "px'";
                if(height1 > 200){
                    $("#heroT4").style.display = "block";
                }*/
            }
            sum4++;
        } else if (t.indexOf("Bat") != -1 || t.indexOf("bat") != -1) {
            if(user5 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#484b4f', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#484b4f', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot5.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum5) / 0.4;
                $("#hero5").height(height);
                /*height1 = parseInt(sum5) / 0.8 + 50;
                $("#heroT5").style.bottom= "'" + height5 + "px'";
                if(height1 > 200){
                    $("#heroT5").style.display = "block";
                }*/
            }
            sum5++;
        } else if (t.indexOf("Wonder") != -1 || t.indexOf("wonder") != -1) {
            if(user6 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#ecb67f', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#ecb67f', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot6.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum6) / 0.4;
                $("#hero6").height(height);
                /*height1 = parseInt(sum6) / 0.8 + 52;
                $("#heroT6").style.bottom= "'" + height6 + "px'";
                if(height1 > 200){
                    $("#heroT6").style.display = "block";
                }*/
            }
            sum6++;
        } else if (t.indexOf("Thor") != -1 || t.indexOf("thor") != -1) {
           if(user7 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#888b91', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#888b91', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot7.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum7) / 0.4;
                $("#hero7").height(height);
                /*height1 = parseInt(sum7) / 0.8 + 45;
                $("#heroT7").style.bottom= "'" + height7 + "px'";
                if(height1 > 200){
                    $("#heroT7").style.display = "block";
                }*/
            }
            sum7++;
        } else if (t.indexOf("Iron") != -1 || t.indexOf("iron") != -1) {
            if(user8 == true){
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#e0923e', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#e0923e', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot8.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum8) / 0.4;
                $("#hero8").height(height);
                /*height1 = parseInt(sum8) / 0.8 + 49;
                $("#heroT8").style.bottom= "'" + height8 + "px'";
                if(height1 > 200){
                    $("#heroT8").style.display = "block";
                }*/
            }
            sum8++;
        }
    });

    supermanG.addEventListener("click", function() {
        user1 = true;
        supermanG.style.backgroundImage = "url(./static/img/superman2.png)";
    }, false);

    spidermanG.addEventListener("click", function() {
        user2 = true;
        spidermanG.style.backgroundImage = "url(./static/img/spiderman2.png)";
    }, false);

    blackwidowG.addEventListener("click", function() {
        user3 = true;
        blackwidowG.style.backgroundImage = "url(./static/img/blackwidow2.png)";
    }, false);

    captainamericaG.addEventListener("click", function() {
        user4 = true;
        captainamericaG.style.backgroundImage = "url(./static/img/captainamerica2.png)";
    }, false);

    batmanG.addEventListener("click", function() {
        user5 = true;
        batmanG.style.backgroundImage = "url(./static/img/batman2.png)";
    }, false);

    wonderwomanG.addEventListener("click", function() {
        user6 = true;
        wonderwomanG.style.backgroundImage = "url(./static/img/wonderwoman2.png)";
    }, false);

    thorG.addEventListener("click", function() {
        user7 = true;
        thorG.style.backgroundImage = "url(./static/img/thor2.png)";
    }, false);

    ironmanG.addEventListener("click", function() {
        user8 = true;
        ironmanG.style.backgroundImage = "url(./static/img/ironman2.png)";
    }, false);

    //BarGraph

    /*
        var svg = d3.select('#bar-area').append('svg');
        svg.attr('width', 900).attr('height', 500);
        var y = d3.scale.linear().domain([0,100]).range([300,0]);
        var x = d3.scale.linear().domain([0,8]).range([800,0]);
        svg.append('rect').attr('fill','red').attr('x',x(1)).attr('y',y(20));


        /*var tweetList = $('ul.tweets');
        socket.on('tweet', function(data) {
            tweetList.prepend('<li>' + data.user + ': ' + data.pointLng + data.pointLat + '</li>');
        });*/

    // Create a color scale for the various earthquake magnitudes; the
    // minimum magnitude in our data set is 2.5.
    var colors = d3.scale.pow()
        .exponent(3)
        .domain([2, 4, 6, 8, 10])
        .range(['white', 'yellow', 'orange', 'red', 'purple']);
    // Also create a scale for mapping magnitudes to ping angle sizes
    var angles = d3.scale.pow()
        .exponent(3)
        .domain([2.5, 10])
        .range([0.5, 15]);
    // And finally, a scale for mapping magnitudes to ping TTLs
    var ttls = d3.scale.pow()
        .exponent(3)
        .domain([2.5, 10])
        .range([2000, 5000]);

    // Create a key to show the magnitudes and their colors
    d3.select('#magnitudes').selectAll('li')
        .data(colors.ticks(9))
        .enter()
        .append('li')
        .style('color', colors)
        .text(function(d) {
            return "Magnitude " + d;
        });
    /*

      // Load our earthquake data and set up the controls.
      // The data consists of an array of objects in the following format:
      // {
      //   mag:  magnitude_of_quake
      //   lng:  longitude_coordinates
      //   lat:  latitude_coordinates
      //   time: timestamp_of_quake
      // }
      // The data is ordered, with the earliest data being the first in the file.
      d3.json('/examples/quake/year_quakes_small.json', function(err, data) {
        if (err) {
          alert("Problem loading the quake data.");
          return;
        }

        var start = parseInt(data[0].time, 10);
        var end = parseInt(data[data.length - 1].time, 10);
        var currentTime = start;
        var lastTick = new Date().getTime();

        var updateDate = function() {
          d3.select('#date').text(moment(currentTime).utc().format("MMM DD YYYY HH:mm UTC"));
        };

        // A scale that maps a percentage of playback to a time
        // from the data; for example, `50` would map to the halfway
        // mark between the first and last items in our data array.
        var percentToDate = d3.scale.linear()
          .domain([0, 100])
          .range([start, end]);

        // A scale that maps real time passage to data playback time.
        // 12 minutes of real time maps to the entirety of the
        // timespan covered by the data.
        var realToData = d3.scale.linear()
          .domain([0, 1000 * 60 * 12])
          .range([0, end - start]);

        var paused = false;

        // Pause playback and update the time display
        // while scrubbing using the range input.
        d3.select('#slider')
          .on('change', function(d) {
            currentTime = percentToDate(d3.event.target.value);
            updateDate();
          })
          .call(d3.behavior.drag()
            .on('dragstart', function() {
              paused = true;
            })
            .on('dragend', function() {
              paused = false;
            })
          );


        // The main playback loop; for each tick, we'll see how much
        // time passed in our accelerated playback reel and find all
        // the earthquakes that happened in that timespan, adding
        // them to the globe with a color and angle relative to their magnitudes.
        d3.timer(function() {
          var now = new Date().getTime();

          if (paused) {
            lastTick = now;
            return;
          }

          var realDelta = now - lastTick;
          // Avoid switching back to the window only to see thousands of pings;
          // if it's been more than 500 milliseconds since we've updated playback,
          // we'll just set the value to 500 milliseconds.
          if (realDelta > 500) realDelta = 500;
          var dataDelta = realToData(realDelta);

          var toPing = data.filter(function(d) {
            return d.time > currentTime && d.time <= currentTime + dataDelta;
          });

          for (var i = 0; i < toPing.length; i++) {
            var ping = toPing[i];
            planet.plugins.pings.add(ping.lng, ping.lat, {
              // Here we use the `angles` and `colors` scales we built earlier
              // to convert magnitudes to appropriate angles and colors.
              angle: angles(ping.mag),
              color: colors(ping.mag),
              ttl:   ttls(ping.mag)
            });
          }

          currentTime += dataDelta;
          if (currentTime > end) currentTime = start;
          updateDate();
          d3.select('#slider').property('value', percentToDate.invert(currentTime));
          lastTick = now;
        });
      });

    */



    // Plugin to resize the canvas to fill the window and to
    // automatically center the planet when the window size changes
    function autocenter(options) {
        options = options || {};
        var needsCentering = false;
        var globe = null;

        var resize = function() {
            var width = window.innerWidth + (options.extraWidth || 0);
            var height = window.innerHeight + (options.extraHeight || 0);
            globe.canvas.width = width;
            globe.canvas.height = height;
            globe.projection.translate([width / 2, height / 2]);
        };

        return function(planet) {
            globe = planet;
            planet.onInit(function() {
                needsCentering = true;
                d3.select(window).on('resize', function() {
                    needsCentering = true;
                });
            });

            planet.onDraw(function() {
                if (needsCentering) {
                    resize();
                    needsCentering = false;
                }
            });
        };
    };

    // Plugin to automatically scale the planet's projection based
    // on the window size when the planet is initialized
    function autoscale(options) {
        options = options || {};
        return function(planet) {
            planet.onInit(function() {
                var width = window.innerWidth + (options.extraWidth || 0);
                var height = window.innerHeight + (options.extraHeight || 0);
                planet.projection.scale(Math.min(width, height) / 2);
            });
        };
    };

    // Plugin to automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
        return function(planet) {
            var lastTick = null;
            var paused = false;
            planet.plugins.autorotate = {
                pause: function() { paused = true; },
                resume: function() { paused = false; }
            };
            planet.onDraw(function() {
                if (paused || !lastTick) {
                    lastTick = new Date();
                } else {
                    var now = new Date();
                    var delta = now - lastTick;
                    var rotation = planet.projection.rotate();
                    rotation[0] += degPerSec * delta / 1000;
                    if (rotation[0] >= 180) rotation[0] -= 360;
                    planet.projection.rotate(rotation);
                    lastTick = now;
                }
            });
        };
    };
})();