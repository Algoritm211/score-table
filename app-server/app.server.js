const http = require("http");
const faker = require('faker');

http
  .createServer((request, response) => {
    console.log("Requested url: " + request.url);

    if (request.url.toLowerCase() === "/events") {
      response.writeHead(200, {
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        'Access-Control-Allow-Origin': '*',
      });

      setInterval(() => {
        response.write(`data: ${
          JSON.stringify({
            player: `${faker.name.firstName()} ${faker.name.lastName()}`,
            score: Math.round(Math.random()  * 1000)
          })
        }`);
        response.write("\n\n");
      }, 3000);
    } else {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000/");
  });
