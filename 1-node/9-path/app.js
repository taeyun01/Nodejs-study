//* Node.js는 컴퓨터 위에서 동작하기 때문에 파일 시스템에 접근하기 너무 좋다.
//* 그럴때 사용하는 path 모듈이 있다. (path = 경로)

const path = require("path");

//* 현재 파일의 경로를 출력 (운영체제(os)마다 경로가 다르게 출력 된다.)
// POSIX (Unix: Linux, Mac): 'Users/temp/myfile.html'
// Windows: 'C:\\Users\\temp\\myfile.html'
console.log(__dirname);
console.log(__filename);

console.log("내 경로 구분자: ", path.sep); // 경로 구분자 (os마다 다름)
console.log("내 환경변수 구분자: ", path.delimiter); // 환경변수 구분자 (os마다 다름)

//* 이렇게 동일한 경로를 이용해서 다양한 정보들을 가지고 올 수 있다.
//* basename
console.log(path.basename(__filename)); // 파일명 출력
console.log(path.basename(__filename, ".js")); // 확장자 제거하고 파일명만 출력

//* dirname
console.log(path.dirname(__filename)); // 파일의 경로 출력

//* extname
console.log(path.extname(__filename)); // 파일의 확장자 출력

//* parse (전체 경로를 하나하나 분리)
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.dir);
console.log(parsed.base);

//* format (분리된 경로를 하나의 경로로 합치기)
const str = path.format(parsed);
console.log(str);

//* isAbsolute (경로가 절대 경로인지 확인) 절대 경로면 true, 상대 경로면 false
console.log("isAbsolute: ", path.isAbsolute(__dirname)); // /Users/
console.log("isAbsolute: ", path.isAbsolute("../"));

//* normalize (이상한 경로를 알아서 수정해줌)
console.log(path.normalize("./folder/////sub")); // 경로 정규화

//* join (경로 합치기)
// console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image")); // path.join을 사용해 더욱 안전하고 쉽게 경로를 합칠 수 있다.
