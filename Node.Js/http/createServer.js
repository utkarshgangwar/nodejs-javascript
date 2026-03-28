const http = require('http');

const rateLimiter = new Map();
const WINDOW_SIZE = 10 * 1000; // 10 seconds
const MAX_REQUESTS = 5;

const server = http.createServer((request, response) => {
    const ip = request.socket.remoteAddress;
    const currentTime = Date.now();

    if (!rateLimiter.has(ip)) {
        rateLimiter.set(ip, {
            count: 1,
            startTime: currentTime
        });
    } else {
        const user = rateLimiter.get(ip);

        // Check if window expired
        if (currentTime - user.startTime > WINDOW_SIZE) {
            user.count = 1;
            user.startTime = currentTime;
        } else {
            user.count += 1;
        }

        // 🚫 Block if limit exceeded
        if (user.count > MAX_REQUESTS) {
            response.writeHead(429, { "Content-Type": "text/plain" });
            return response.end("Too many requests. Try again later.");
        }
    }

    // ✅ Allowed request
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello");
});

server.listen(8000);
console.log("Server running on port 8000");