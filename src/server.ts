import Hapi from '@hapi/hapi';
import { getTokens, getOrders, buyToken } from './controller/reservior.js';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return {
        message: 'Server is running!',
      };
    },
  });

  // Add your routes here

  server.route({
    method: 'GET',
    path: '/buy-token',
    handler: buyToken,
  });

  server.route({
    method: 'GET',
    path: '/tokens',
    handler: getTokens,
  });

  server.route({
    method: 'GET',
    path: '/orders',
    handler: getOrders,
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

export default init;
