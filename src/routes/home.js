const data = {
  title: 'PAS',
  tagLine: 'Park & Sleep',
  welcomeA: 'Welcome!',
  welcomeB: 'How will you be arriving?',
};

module.exports = {
  method: 'GET',
  path: '/method',
  handler: (request, reply) => {
    reply.view('splash', data);
  },
};
