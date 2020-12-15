<template>
  <div id="container">
    <div id="map1"></div>
  </div>
</template>

<!-- leaflet web map api -->
<link    rel="stylesheet"     href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/leaflet.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/leaflet.js"></script>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  methods: {
    setupLeafletMap: () => {
      new L.Map( "map1", {
        center  : new L.LatLng(38,-99),
        minZoom : 3,
        maxZoom : 15,
        zoom    : 3,
        layers  : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
        searchControl : {} // can specify options - those unspecified set to defaults
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
