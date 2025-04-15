//* file - 다양한 사용법
//* 파일에 관련해 좀 더 다양한 api들을 알아보자

const fs = require("fs").promises; // 이번엔 프로미스를 가져와서 사용. fs모듈 안에 있는 promises를 가르킴

//* 파일 읽기: readFile()
fs.readFile("./hello.txt", "utf-8") // utf-8로 인코딩 해줘야 문자열로 읽을 수 있음
  .then((data) => console.log(data))
  .catch(console.error);

//* 파일 쓰기: writeFile()
fs.writeFile("./hello.txt", "저는 유태윤입니다.ㅋㅋㅋ", "utf-8")
  // writeFile은 Promise가 void임 즉, 파일쓰기만 하면 끝. then이 필수는 아님. 필요 시 사용
  .catch(console.error); // 에러 처리는 필수

//* 기존 파일에 추가하기: appendFile()
// fs.appendFile("./hello.txt", "추가합니다.", "utf-8")
//   // appendFile도 Promise가 void임
//   .catch(console.error);

//* 파일 복사: copyFile()
// fs.copyFile("./hello.txt", "./hello copy.txt").catch(console.error);

//* 위 파일복사 코드를 실행해보면 파일이 복사가 안돼 있는 걸 볼 수 있는데,
//* 지금 모든 fs코드들이 비동기 적으로 처리되고 있으므로 데이터가 쓰기도 전에 복사가 됐을 수 있음
//* 그래서 순차적으로 처리 해야함
fs.appendFile("./hello.txt", "추가합니다.", "utf-8")
  .then(() => {
    fs.copyFile("./hello.txt", "./hello copy.txt").catch(console.error);
  })
  .catch(console.error);

//* 비동기는 순차적으로 될 수도 있고 안 될 수도 있기 때문에 유의해서 사용
//* 우리가 코드는 순차적으로 작성했지만 전부 프로미스 이므로 비동기적으로 처리되서 순서가 보장이 되지 않는다.
//* 순서가 중요한 경우라면 then을 사용해 해당 하는 프로미스가 수행 된 다음 일을 처리하도록 하면 된다.

//* 폴더 생성: mkdir()
fs.mkdir("sub-folder")
  .then(() => console.log("폴더 생성 완료"))
  .catch((err) =>
    console.error(err.errno === -17 ? "이미 존재하는 폴더입니다." : err.message)
  );

//* 폴더 내 파일 목록 조회: readdir() -> Promise<string[]> string배열 반환
fs.readdir("./")
  .then((files) => console.log("파일목록: ", files))
  .catch(console.error);

//* 중요한 포인트
//* 항상 api(메서드)들을 사용할 때는 정의로 이동(F12)하여 인자는 뭐가 있는지, 추가적으로 전달해야 하는 옵션이 있는지
//* 함수에서 리턴되는 값을 무엇인지 알아보고 사용하자
//* 그리고 프로미스라면 catch를 이용하여 에러를 잡아내자
