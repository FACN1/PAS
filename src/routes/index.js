const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const taxiHandler = require('./taxi.js');
const carHandler = require('./car.js');
const busHandler = require('./bus.js');
const walkingHandler = require('./walking.js');
const mapHandler = require('./map.js');
const successHandler = require('./success.js');
const guesthouseHandler = require('./guesthouses.js');


module.exports = [
  homeHandler,
  staticHandler,
  taxiHandler,
  carHandler,
  busHandler,
  walkingHandler,
  mapHandler,
  successHandler,
  guesthouseHandler,
];
