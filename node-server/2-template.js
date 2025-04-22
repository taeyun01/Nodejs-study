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
  res.setHeader("Content-Type", "text/html");

  // 요청한 url에 따라 html파일을 읽어옴
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/about") {
    ejs
      .renderFile("./template/about.ejs", { about })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
