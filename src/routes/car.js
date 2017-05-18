const data = {
  title: 'Private Parking',
  tagLine: 'ElMutran Parking',
  nextLink: '/walk',
  nextText: 'ARRIVED',
  backLink: '/',
};

module.exports = {
  method: 'GET',
  path: '/car',
  handler: (request, reply) => {
    reply.view('car', data);
  },
};
