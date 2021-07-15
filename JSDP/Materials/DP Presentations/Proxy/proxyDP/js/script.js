function GeoCoder() {

    this.getLatLan = function (address) {
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

///////////////////////////////////////////////////////////////
function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    return {
        getLatLan: function (address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLan(address);
            }
            console.log(address + ": " + geocache[address]);
            console.log(geocache)
            //return geocache[address];
        }
    }
}

////////////////////////////////////////
// var geo = new GeoProxy();
// geo.getLatLan("Paris");
// console.log(geo.getLatLan("Paris"));
// geo.getLatLan("London");
//geo.getLatLan("London");
/////////////////////////////////////////////////
// var geo2 = new GeoProxy()
// geo2.getLatLan("Berlin")