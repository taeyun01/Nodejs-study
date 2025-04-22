const http = require("http");

// console.log(http.STATUS_CODES); // 상태 코드 목록
// console.log(http.METHODS); // 메서드 목록

const server = http.createServer((req, res) => {
  console.log("request headers: ", req.headers); // 요청 헤더
  console.log("request body: ", req.body); // 요청 바디
  console.log("request method: ", req.method); // 요청 메서드
  console.log("request url: ", req.url); // 요청 URL
  console.log("request httpVersion: ", req.httpVersion); // 요청 HTTP 버전
  console.log("request rawHeaders: ", req.rawHeaders); // 요청 원시 헤더
  res.write("Welcome to the home page");

  res.end();
});

server.listen(8080);
