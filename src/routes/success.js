const data = {
  title: 'Daher',
  tagLine: '6098/8 Nazareth',
  welcomeA: 'You have arrived!',
  welcomeB: 'Thank you for using PAS.',
  nextLink: '/',
  nextText: 'HOME',
  backLink: '/walk',
};

module.exports = {
  method: 'GET',
  path: '/success',
  handler: (request, reply) => {
    reply.view('success', data);
  },
};
