const data = {
  title: 'Private Parking',
  tagLine: 'ElMutran Parking',
};

module.exports = {
  method: 'GET',
  path: '/car',
  handler: (request, reply) => {
    reply.view('car', data);
  },
};
