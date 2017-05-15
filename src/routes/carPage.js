const carRouteHandler = (request, reply) => {
  reply.view('carRoute', {
    title: 'Private Parking',
    address: 'ElMutran Parking',
  });
};

module.exports = {
  method: 'GET',
  path: '/car',
  handler: carRouteHandler,
};
