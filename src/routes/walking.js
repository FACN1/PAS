const data = {
  title: 'Daher',
  tagLine: '6098/8 Nazareth',
};

module.exports = {
  method: 'GET',
  path: '/walk',
  handler: (request, reply) => {
    reply.view('walking-directions', data);
  },
};
