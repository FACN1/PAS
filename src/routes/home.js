const data = {
  logo: 'PAS',
  tagLine: 'Park & Sleep',
};


module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply.view('splash', data);
  },
};
