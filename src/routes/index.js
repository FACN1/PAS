const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const taxiHandler = require('./taxi.js');

module.exports = [
  homeHandler,
  staticHandler,
  taxiHandler,
];
