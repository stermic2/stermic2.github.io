<template>
  <div id="container">
    <div id="map1"    class="map"   ></div>
    <div id="search2" class="search"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import $ from "jquery";

export default {
  name: "Map",
  methods: {
    setupLeafletMap: function() {
      this.map = new L.Map( "map1", {
        center  : new L.LatLng(38,-99),
        minZoom : 3,
        maxZoom : 15,
        zoom    : 3,
        layers  : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
        searchControl : {} // can specify options - those unspecified set to defaults
      });
      // eslint-disable-next-line no-undef
      search_api.create( "search2", {
        on_result: function(o) {
          // what to do when a location is found
          // o.result is geojson point feature of location with properties
          this.map
              .fitBounds([ // zoom to location
                [ o.result.properties.LatMin, o.result.properties.LonMin ],
                [ o.result.properties.LatMax, o.result.properties.LonMax ]
              ])
              .openPopup(  // open popup at location listing all properties
                  $.map( Object.keys(o.result.properties), function(property) {
                    return "<b>" + property + ": </b>" + o.result.properties[property];
                  }).join("<br/>"),
                  [ o.result.properties.Lat, o.result.properties.Lon ]
              );
        }
      });
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style>
#map1, .container {
  position      : relative;
  width         : 90%;
  max-width     : 1000px;
  height        : 500px;
  margin-bottom : 50px;
}
.map {
  width   : 100%;
  height  : 100%;
  border  : 1px solid black;
  z-index : 1;
}
.search {
  position : absolute;
  top      : 10px;
  right    : 10px;
  z-index  : 2;
}
</style>
