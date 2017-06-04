const data = {
  title: 'PAS',
  tagLine: 'Park & Sleep',
  welcomeA: 'Welcome!',
  welcomeB: 'Please select your guesthouse:',
};

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply.view('guesthouse', data);
  },
};
