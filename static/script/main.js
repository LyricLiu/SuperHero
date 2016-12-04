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

    //loading
    var loading = document.getElementById('loading-module');
    var content = document.getElementById('main-module');
    setTimeout(function() { loading.style.display = "none"; }, 6000);
    setTimeout(function() { content.style.display = "block"; }, 6000);


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
    var user1 = false;
    var user2 = false;
    var user3 = false;
    var user4 = false;
    var user5 = false;
    var user6 = false;
    var user7 = false;
    var user8 = false;
    

    socket.on('tweet', function(data) {
        var t = data.text;
        if (t.indexOf("Super") != -1 || t.indexOf("super") != -1 || t.indexOf("SUPER") != -1) {
            if (user1 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#319fd0', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#319fd0', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot1.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum1) / 0.8;
                $("#hero1").height(height);
            }
            sum1++;
        } else if (t.indexOf("Spider") != -1 || t.indexOf("spider") != -1 || t.indexOf("SPIDER") != -1) {
            if (user2 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#c03f59', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#c03f59', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot2.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum2) / 0.8;
                $("#hero2").height(height);
            }
            sum2++;
        } else if (t.indexOf("Black") != -1 || t.indexOf("black") != -1) {
            if (user3 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#080404', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#080404', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot3.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum3) / 0.8;
                $("#hero3").height(height);
            }
            sum3++;
        } else if (t.indexOf("Captain") != -1 || t.indexOf("captain") != -1) {
            if (user4 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#0c6c8e', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#0c6c8e', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot4.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum4) / 0.8;
                $("#hero4").height(height);
            }
            sum4++;
        } else if (t.indexOf("Bat") != -1 || t.indexOf("bat") != -1) {
            if (user5 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#484b4f', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#484b4f', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot5.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum5) / 0.8;
                $("#hero5").height(height);
            }
            sum5++;
        } else if (t.indexOf("Wonder") != -1 || t.indexOf("wonder") != -1) {
            if (user6 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#ecb67f', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#ecb67f', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot6.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum6) / 0.8;
                $("#hero6").height(height);
            }
            sum6++;
        } else if (t.indexOf("Thor") != -1 || t.indexOf("thor") != -1) {
            if (user7 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#888b91', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#888b91', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot7.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum7) / 0.8;
                $("#hero7").height(height);
            }
            sum7++;
        } else if (t.indexOf("Iron") != -1 || t.indexOf("iron") != -1) {
            if (user8 == true) {
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#e0923e', ttl: 2000, angle: 5 });
                planet.plugins.pings.add(data.pointLng, data.pointLat, { color: '#e0923e', ttl: 2000000, angle: 1 });
                tweetList.prepend('<li>' + '<img src="./static/img/dot8.png">' + data.user + ': ' + data.text + '</li>');
                height = parseInt(sum8) / 0.8;
                $("#hero8").height(height);
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


    // Create a color scale
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