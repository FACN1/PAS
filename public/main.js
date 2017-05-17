/* eslint-env browser */

setTimeout(() => {
  const mymap = L.map('mapid', {
    center: [32.699, 35.303],
    zoomControl: false,
    attributionControl: false,
    zoom: 13,
  });

  L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ').addTo(mymap);

  function makeRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
      }
      if (xhr.status === 500) {
        callback(new Error(xhr.status));
      }
    };
    xhr.open(method, url);
    xhr.send();
  }

  makeRequest('GET', '/map', (err, corrds) => {
    if (err) {
      return err;
    }
    const direction = corrds.geometry.coordinates;

    // the steps const is turn by turn instructions for the route
    // const steps = corrds.legs[0].steps;
    for (let i = 0; i < direction.length - 1;) {
      if (i === 0) {
        L.marker([corrds[i][1], corrds[i][0]]).addTo(mymap);
      }
      const pointA = new L.LatLng(corrds[i][1], corrds[i][0]);
      const pointB = new L.LatLng(corrds[i += 1][1], corrds[i][0]);
      const pointList = [pointA, pointB];

      const firstpolyline = new L.Polyline(pointList, {
        smoothFactor: 1,
        weight: 3,
      });
      firstpolyline.addTo(mymap);

      if (i === corrds.length - 1) {
        L.marker([corrds[i][1], corrds[i][0]]).addTo(mymap);
      }
    }
    return 1;
  });

  // this code will be deleted when we get the cordds for the parking lot and   // bus station
  mymap.on('click', (e) => {
    console.log(`${e.latlng.lat} + ' , ' + ${e.latlng.lng}`);
  });
}, 1);
