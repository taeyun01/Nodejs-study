//* 파이프는 여러가지를 묶어서 쓸 수 있다.

const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file5.zip"); // file4 파일을 생성

//* file.txt에 있는 데이터를 file5.txt에 pipe로 묶어서 쓸 수 있다.
// const piping = readStream.pipe(writeStream);
// piping.on("finish", () => {
//   console.log("Done!!");
// });

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("Done!!");
});

//* 파이핑은 나중에 서버를 만들때도 도움이 된다. 우선 가볍게 이런게 있구나 하고 넘어가자
//* 비효율적인 방법
// const http = require("http");
// const server = http.createServer((req, res) => {
//* 1. 파일을 전부다 읽은 다음 메모리의 데이터를 읽어 보내주게 된다.
//   fs.readFile("./file.txt", (err, data) => {
//     if (err) {
//       throw err;
//     }
//* 2. 리소스에 데이터를 보내는건 비효율적이다.
//     res.end(data);
//   });
// });

// server.listen(3000);

//* 효율적인 방법
// const http = require("http");
// const server = http.createServer((req, res) => {
//   fs.readFile("./file.txt", (err, data) => {
//* 스트림을 이용해 스트림 자체를 response에 파이핑해서 연결해주면 좋다.
//     const stream = fs.createReadStream("./file.txt");
//     stream.pipe(res);
//   });
// });

// server.listen(3000);
