const process = require("process");

// 프로세스는 현재 동작하고 있는 Node 프로세스에 대한 정보를 얻을 수 있다. (다양한 프로세스 정보들이 담겨 있는 객체)
console.log("execPath: ", process.execPath);
console.log("version: ", process.version);
console.log("pid: ", process.pid);
console.log("ppid: ", process.ppid);
console.log("platform: ", process.platform);
console.log("env: ", process.env);
console.log("uptime: ", process.uptime());
console.log("cwd: ", process.cwd());
console.log("cpuUsage: ", process.cpuUsage());

// 현재 수행되고 있는 코드가 완료되고 나서 0초뒤 실행
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// 현재 수행되고 있는 코드가 완료된 다음 내가 등록한 콜백 함수를 task queue에 넣어달라고 할 때 사용할 수 있다. (setTimeout이랑 동일)
// nextTick()은 task queue에 setTimeout()이 있어도 제일 우선순위를 높여서 먼저 실행시킨다.
process.nextTick(() => {
  console.log("nextTick");
});

// for loop가 끝난 후 위 함수들이 실행되는 걸 볼 수 있다.
// 그래서 무거운 연산들은 node에서 지양한다.
for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
