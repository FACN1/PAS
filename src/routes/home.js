module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply.view('splash', {
      title: 'PAS',
      tagLine: 'Park & Sleep',
    });
  },
};
