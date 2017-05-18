const data = {
  title: 'Daher',
  tagLine: '6098/8 Nazareth',
  link: '/success',
  taxiPrice: '7.50 USD',
  welcomeA: 'Book from your location for:',
  nextLink: '/success',
  nextText: 'ARRIVED',
  backLink: '/',
};

module.exports = {
  method: 'GET',
  path: '/taxi',
  handler: (request, reply) => {
    reply.view('taxi', data);
  },
};
