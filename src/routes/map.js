const MapboxClient = require('mapbox');

module.exports = {
  method: 'GET',
  path: '/map',
  handler: (request, reply) => {
    const mapboxClient = new MapboxClient('pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ');
    mapboxClient.getDirections([
      { latitude: 32.727151049408754, longitude: 35.31573011947331 },
      { latitude: 32.65838495341223, longitude: 35.28963759017643 },
    ],
      {

      },
      (err, results) => {
        reply(JSON.stringify(results.routes[0].geometry.coordinates));
      });
  },
};
