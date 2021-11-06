const http = require('http');
const faker = require('faker');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });
  setInterval(() => {
    response.write(
      JSON.stringify({
        player: `${faker.name.firstName()} ${faker.name.lastName()}`,
        score: Math.round(Math.random() * 1000),
      }),
    );
    response.write('\n\n');
  }, 3000);
}).listen(5000);
