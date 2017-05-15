const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const vision = require('vision');
const handlebars = require('handlebars');

const server = new hapi.Server();

const routes = require('./routes');

server.connection({
  port: process.env.PORT || 8000
});

server.register([inert, vision], (err) => {
  if (err) {
    throw err;
  }
  server.route(routes);

  server.views({
    engines: {
      hbs: handlebars
    },
    relativeTo: path.join(__dirname, 'handlebars'),
    layoutPath: './layouts',
    layout: 'default',
    path: './views',
    partialsPath: './partials',
    helpersPath: './helpers'
  });
});


module.exports = server;
