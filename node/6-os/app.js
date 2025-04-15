const os = require("os");

console.log(os.EOL === "\n"); // 리눅스는 줄바꿈 문자열이 \n
console.log(os.EOL === "\r\n"); // 윈도우는 \r\n

console.log("totalmem: ", os.totalmem());
console.log("freemem: ", os.freemem());
console.log("type: ", os.type());
console.log("userInfo: ", os.userInfo());
console.log("cpus: ", os.cpus());
console.log("homedir: ", os.homedir());
console.log("hostname: ", os.hostname());
console.log("platform: ", os.platform());

// 다양한 운영체제 관련 메서드
// 내 서버가 동작하고 있는 환경에 대한 정보를 얻어올 때 os모듈을 사용할 수 있다.
