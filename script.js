function initmap() {
    map = new L.Map('map');
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 19, attribution: osmAttrib});
    map.setView(new L.LatLng(24.7136, 46.6753), 15); 
    map.addLayer(osm);

    var marker = L.marker([24.7136, 46.6753]).addTo(map); 
    marker.bindPopup("<b>Saudi Arabia Riyadh</b><br>here").openPopup();
}

initmap();
