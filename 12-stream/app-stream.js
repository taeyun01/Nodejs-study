//* 스트림을 사용하여 장점을 확인해보자

const fs = require("fs");

// const readStream = fs.createReadStream("./file.txt", {
//   highWaterMark: 8, // 한번에 얼마만큼의 데이터를 읽어오는지 정할 수 있다. (정하지 않으면 기본 64kb)
//   encoding: "utf-8", // 인코딩 방식을 지정할 수 있다.
// });

//* createReadStream()에는 실시간 이벤트가 있다. (F12확인)

//* on함수는 데이터가 발생할 때 마다 콜백함수가 수행이 된다. once는 딱 한번만 수행한다
// readStream.on("data", (chunk) => {
//   // console.log(chunk);
//   // console.count("data");
// });

// readStream.on("error", (err) => {
//   console.log(err);
// });

// const readStream2 = fs.createReadStream("./file.txt", {
//   // 옵션을 따로 전달하지 않음
// });

// const data = [];
// readStream2.on("data", (chunk) => {
//   // 1. 덩어리들을 배열에 넣어 저장해두고
//   data.push(chunk);
//   console.count("data");
// });

// // data작업이 끝나면 end 이벤트가 발생
// readStream2.on("end", () => {
//   // 2. 배열에 저장된 덩어리들을 하나의 문자열로 합친다.
//   console.log(data.join(""));
// });

// readStream2.on("error", (err) => {
//   console.log(err);
// });

//* on이라는 이벤트 리스너는 자기 자신을 반환하고 있는걸 확인할 수 있다.
//* on(event: "close", listener: () => void): this;
//* 그래서 위 처럼 개별적으로 하나하나 작성하지 않고 체이닝을 해서 한번에 작성할 수 있다.
const data2 = [];
fs.createReadStream("./file.txt", {
  highWaterMark: 64,
})
  //* once를 사용하게 되면 처음에 받은 덩어리만 출력되는 걸 볼 수 있다.
  .once("data", (chunk) => {
    data2.push(chunk);
    console.count("data2");
  })
  .on("end", () => {
    console.log(data2.join(""));
  })
  .on("error", (err) => {
    console.log(err);
  });
