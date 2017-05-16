const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const taxiHandler = require('./taxi.js');
const carHandler = require('./car.js');
const busHandler = require('./bus.js');

module.exports = [
  homeHandler,
  staticHandler,
  taxiHandler,
  carHandler,
  busHandler,
];
