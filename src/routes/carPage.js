const carRouteHandler = (request, reply) => {
  reply.view('car-route', {
    title: 'Private Parking',
    tagLine: 'ElMutran Parking',
  });
};

module.exports = {
  method: 'GET',
  path: '/car',
  handler: carRouteHandler,
};
