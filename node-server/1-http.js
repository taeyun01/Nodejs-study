const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url; // 요청한 url
  res.setHeader("Content-Type", "text/html");

  // 요청한 url에 따라 html파일을 읽어옴
  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/about") {
    fs.createReadStream("./html/about.html").pipe(res);
  } else {
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(8080);
