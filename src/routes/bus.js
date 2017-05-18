const data = {
  title: 'Central Station',
  tagLine: 'Paulus Hashishi',
  nextLink: '/walk',
  nextText: 'ARRIVED',
  backLink: '/',
};

module.exports = {
  method: 'GET',
  path: '/bus',
  handler: (request, reply) => {
    reply.view('bus', data);
  },
};
