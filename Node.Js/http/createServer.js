const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello");
});

server.listen(8000);
console.log("server running on port 8000");