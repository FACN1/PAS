const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const busHandler = require('./bus.js');

module.exports = [
  homeHandler,
  staticHandler,
  busHandler,
];
