/* eslint-env browser */
console.log('OY');

setTimeout(function () {
  const mymap = L.map('mapid', {
    center: [32.699, 35.303],
    zoomControl: false,
    attributionControl: false,
    zoom: 15,
  });

  L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ').addTo(mymap);
}, 50);
