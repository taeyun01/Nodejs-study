const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "홍길동";
const about = [
  { name: "홍길동", age: 20 },
  { name: "철수", age: 21 },
  { name: "영희", age: 22 },
  { name: "영수", age: 23 },
];

const server = http.createServer((req, res) => {
  const url = req.url; // 요청한 url
  const method = req.method; // 요청한 메서드

  if (url === "/about") {
    if (method === "GET") {
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(JSON.stringify(about));
    } else if (method === "POST") {
      const body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
        console.log(chunk);
      });

      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const aboutParsed = JSON.parse(bodyStr);
        about.push(aboutParsed);
        console.log(about);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
