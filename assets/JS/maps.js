function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.5072, lng: 0.1276 },
        zoom: 8,
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.52212160372153, lng: -0.10276301534399929 },
        { lat: 51.469713704650765, lng:-0.22039309010584865}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


