var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    map = new L.Map('map');

    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm = new L.TileLayer(osmUrl, {minZoom: 7, maxZoom: 20});

    var southWest = L.latLng(34.1, -118.9),
        northEast = L.latLng(34.7, -118.1),
        bounds = L.latLngBounds(southWest, northEast);

/* http://api.openstreetmap.org/api/0.6/map?bbox=-118.6166,34.3729,-118.4491,34.476 */

    map.maxBounds = bounds;

    map.setView(new L.LatLng(34.4395,-118.5417),15);
    map.addLayer(osm);

//    L.marker([34.43954878, -118.54173187]).addTo(map);
}
