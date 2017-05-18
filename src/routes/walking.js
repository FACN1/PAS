const data = {
  title: 'Daher',
  tagLine: '6098/8 Nazareth',
  nextLink: '/success',
  nextText: 'ARRIVED',
  backLink: '/',
  color: '#0c052d',
};

module.exports = {
  method: 'GET',
  path: '/walk',
  handler: (request, reply) => {
    reply.view('walking-directions', data);
  },
};
