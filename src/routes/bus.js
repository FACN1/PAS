const busRouteHandler = (request, reply) => {
  const data = {
    title: 'Central Station',
    tagLine: 'Paulus Hashishi',
  };

  reply.view('bus-route', data);
};

module.exports = {
  method: 'GET',
  path: '/bus',
  handler: busRouteHandler,
};
