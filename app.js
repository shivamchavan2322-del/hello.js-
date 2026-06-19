// Step 1: bring in HTTP
const http = require("http");

// Step 2: create the server
const server = http.createServer((req, res) => {

    // Step 3: handle requests
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World!");
    }
});

// Step 4: start listening
server.listen(3000, () => {
    console.log("Server running on port 3000");
});