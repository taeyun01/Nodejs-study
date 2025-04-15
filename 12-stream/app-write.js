const fs = require("fs");

//* 쓰기도 스트림을 사용할 수 있다.
const writeStream = fs.createWriteStream("./file3.txt"); // file3 파일을 생성

// 쓰기가 완료되면 실행되는 이벤트
writeStream.on("finish", () => {
  console.log("finished!!");
});

writeStream.write("Hello");
writeStream.write("World!!!");
writeStream.end(); // end()를 호출해줘야 finish 이벤트가 발생함
