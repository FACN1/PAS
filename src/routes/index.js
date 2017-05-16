const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const busHandler = require('./bus.js');
const carHandler = require('./carPage.js');

module.exports = [
  homeHandler,
  staticHandler,
  busHandler,
  carHandler,
];
