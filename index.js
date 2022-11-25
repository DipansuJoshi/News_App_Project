const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    if (req.url == "/" || req.url == "/home") {
        const myFile = fs.readFile("index.html", "utf-8",  (err, data) => {
            res.end(data);
        });
    } else {
        res.writeHead(400, {"Content-type:":"other"});
        res.end("<h1>404 Page Error.</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Yes Man I am Running Freely...");
});