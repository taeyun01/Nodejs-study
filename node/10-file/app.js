//* file모듈 동기와 비동기 그리고 프로미스
//* 파일 시스템에 접근하는 파일 모듈에 대해 알아보자
//* 파일에서 기본적으로 할 수 있는 모든 동작들은 fs모듈에서 제공해줌
const fs = require("fs");

// 유의할 점
// 모든 api는 3가지 형태로 제공
// rename(..., callback(err, data)): 두가지 인자를 통해 에러인지, 성공해서 데이터를 가져왔는지 전달이됨
// renameSync(...) : 따로 콜백함수를 전달하지 않음. 대신 잘못되면 에러 발생 (끝날때 까지 다음줄로 넘어가지 않음. 동기적으로 수행이 됨)
// renameSync는 에러를 반환해주지 않기 때문에 try {renameSync(...)} catch (err) {} 문을 써야한다.
// promise.rename().then().catch() : promise 형태로 사용할 수 있음

//* renameSync(): 동기적으로 수행되므로 가급적 사용하진 않음
// fs.renameSync("./file1.txt", "./file2.txt");
// console.log("renameSync()는 에러나면 실행되지 않고 동작이 멈춤");

// try {
//   fs.renameSync("./test.txt", "./test2.txt");
// } catch (err) {
//   console.error("err: ", err);
// }

// console.log(
//   "하지만 try catch 문을 써서 에러를 처리하면 에러를 캐치 후 다음 코드 실행"
// );

//* rename(): 비동기
//* fs를 정의로 이동해서 rename 콜백을 살펴보면 에러가 발생할 때는 에러를 반환하는걸 볼 수 있음
fs.rename("./test.txt", "./hello.txt", (err) => {
  if (err) {
    console.error("err: ", err);
  } else {
    console.log("파일 이름 변경 성공");
  }
});

console.log("안녕하세요");

//* 콜백함수 쓰는게 지저분 하다면 프로미스를 사용할 수 있음
fs.promises
  .rename("./test4.txt", "./test5.txt")
  .then(() => console.log("파일 이름 변경 성공"))
  // .catch((err) => console.error("err: ", err));
  .catch(console.error); // 전달하는 인자가 동일하면 생략해서 사용가능

//* Sync를 사용하는 것보단 콜백이나 프로미스를 사용하는 것이 좋다.
