//* 노드js의 마지막특징인 이벤트에 대해 알아보자

//* Node.js는 컴퓨터 위에서 동작하는 자바스크립트 런타임 환경 이다.
//* 그래서 브라우저 환경에서는 할 수 없었던 os, process, path, fs(버퍼, 스트림 등등)에 접근할 수 있는 기능을 제공한다.
//* 그리고 입출력에 관련된건 논블로킹 이기 때문에 콜백 함수로 등록하거나 프로미스 형태로 비동기적으로 처리할 수 있는걸 알아봤다.
//* 그리고 스트림을 이용하면서 이벤트의 방식을 살펴보았다. (on, finish 등등..)

//* 우리가 원하는 커스텀한 이벤트를 만들어 볼 수도 있다.
const EventEmitter = require("events");

const emitter = new EventEmitter();

// taeyun이라는 이벤트가 발생하면 어떤 일들을 한건지 정의할 수 있다.
emitter.on("taeyun", (args) => {
  console.log("첫번째: ", args);
});

// emitter에는 원하는 갯수만큼 콜백함수를 등록할 수 있다.
// 현재는 taeyun이라는 이벤트가 발생하면 두개의 콜백함수가 실행된다.
emitter.on("taeyun", (args) => {
  console.log("두번째: ", args);
});

// 이벤트를 발생시키는 메서드는 emit이다.
// 이벤트가 발생할 때마다 등록된 두가지 콜백함수가 실행되는걸 볼 수 있다.
// 이벤트 이름과 전달하고자하는 데이터를 명시해주면 위 on콜백함수에서 args로 받을 수 있다.
emitter.emit("taeyun", {
  message: 1,
});

emitter.emit("taeyun", {
  message: 2,
});

// taeyun이벤트에 등록된 콜백함수 첫번째를 제거하겠다. removeAllListeners는 모든 이벤트에 등록된 콜백함수를 제거한다. 옵션은 F12확인
emitter.removeListener("taeyun", (args) => {
  console.log("첫번째: ", args);
});

emitter.emit("taeyun", {
  message: "하하하하",
});
