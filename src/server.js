const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const handlebars = require('handlebars');

const server = new hapi.Server();

const routes = require('./routes');

server.connection({
  port: process.env.PORT || 8000,
});

server.register([inert, vision], (err) => {
  if (err) {
    throw err;
  }

  server.views({
    engines: {
      hbs: handlebars,
    },
    relativeTo: __dirname,
    layoutPath: './views/layout',
    layout: 'default',
    path: './views',
    partialsPath: './views/partials',
    helpersPath: './views/helpers',
  });

  server.route(routes);
});

module.exports = server;
