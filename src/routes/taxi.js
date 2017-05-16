const data = {
  title: 'Daher',
  tagLine: '6098/8 Nazareth',
};


module.exports = {
  method: 'GET',
  path: '/taxi',
  handler: (request, reply) => {
    reply.view('taxi', data);
  },
};
