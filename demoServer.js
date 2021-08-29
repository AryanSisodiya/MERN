const http = require("http");
const path = require("path");
const fs = require("fs");
const index = fs.readFileSync(path.join(__dirname + "/client/build/index.html"))
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    let url = req.url;
    res.statusCode = 200;

    if (url === "/") {
        res.end(index)
    }   else {
        res.statusCode = 404;
        res.end("404!, not found")
    }
});

server.listen(2000, () => console.log("DemoServer is started!"))