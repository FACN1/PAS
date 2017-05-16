/* eslint-env browser */

setTimeout(() => {
  const mymap = L.map('mapid', {
    center: [32.699, 35.303],
    zoomControl: false,
    attributionControl: false,
    zoom: 15,
  });

  L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ').addTo(mymap);

  L.Routing.control({
    waypoints: [
      L.latLng(32.7006426263693, 35.29701232910157),
      L.latLng(32.69504486377865, 35.30619621276856),
    ],
    routeWhileDragging: true,
  }).addTo(mymap);

  // this code will be deleted when we get the cordds for the parking lot and   // bus station
  mymap.on('click', (e) => {
    console.log(`${e.latlng.lat} + ' , ' + ${e.latlng.lng}`);
  });
}, 50);
