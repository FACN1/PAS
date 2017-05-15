const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const vision = require('vision');

const server = new hapi.Server();

const routes = require('./routes')

server.connection({
  port: process.env.PORT || 8000
})

server.register([inert, vision], (err) => {
  if (err) {
    throw err;
  }
  server.route(routes);

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: path.join(__dirname, 'handlebars'),
    layoutPath: './layouts',
    layout: 'default',
    path: './views',
    partialsPath: './partials',
    helpersPath: './helpers'
  })
})


module.exports = server;
