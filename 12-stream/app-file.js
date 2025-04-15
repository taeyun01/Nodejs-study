//* 스트림의 매력
//* 스트림을 어떻게 활용할 수 있는지, 또 사용 했을 때 어떤 장점이 있는지 알아보자
const fs = require("fs");

//? 우선 스트림을 사용하지 않고 그냥 파일을 읽고 쓰는 방식으로 테스트 해보자

//* 지금 사용하고 있는 메모리 상태를 저장
const beforeMemory = process.memoryUsage().rss;

//* 파일을 다 읽음
fs.readFile("./file.txt", (_, data) => {
  //* 읽은 파일의 데이터를 새로운 파일에 저장
  fs.writeFile("./file2.txt", data, () => {});

  //* 저장 후 실제로 메모리 사용에 얼마나 큰 변화가 있는지 차이점을 메가바이트로 출력
  const afterMemory = process.memoryUsage().rss;
  const diff = afterMemory - beforeMemory;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`메모리 사용량: ${consumed}MB`); // 파일을 읽어서 쓰는데 까지 메모리 사용량
});

//* 만약 이 파일이 내가 쓰고 있는 컴퓨터 메모리보다 큰 사이즈의 파일이라면 다 읽어 올 수가 없다.
//* 위 처럼 모든 데이터를 읽고 나서 쓰는 것은 비효율적 이다.
