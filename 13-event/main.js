const logger = require("./logger.js");
const emitter = new logger.Logger(); // 16. logger에 있는 Logger 클래스를 사용해서 emitter를 만들어준다. (emitter는 즉, Logger 클래스의 인스턴스)

// 17. emitter에 있는 log이벤트를 듣고 있다가 이벤트가 발생하면 콘솔로그를 출력하고
emitter.on("log", (event) => {
  console.log(event);
});

// 18. emitter안에 있는 log함수를 이용해서 "log"이벤트를 발생시키고 콜백함수를 실행한다.
emitter.log(() => {
  console.log(".... doing something!");
});

//* 1. 여기서 실수하는 것중에 하나가 이 이벤트를 듣기 위해서
// const EventEmitter = require("events"); // 2. events모듈을 불러오고
// const emitter = new EventEmitter(); // 3. emitter를 만들어서

// 4. log이벤트가 발생하면 실행해야지 라고 생각함.
// emitter.on("log", (event) => {
//   console.log(event);
// });

// 5. 실행해보면 .... doing something! 콘솔로그만 실행됨 왜 그럴까???
// logger.log(() => {
//   console.log(".... doing something!");
// });

// 6. 새로운 EventEmitter 객체를 만들면 log라는것 듣고는 있지만 누가 이벤트는 emit하는 곳이 없다.
// 7. 그래서 듣고있는 emitter와 다른 파일(logger.js)에서 emit하고 있는 emitter는 전혀 다르다.

// 8. 그래서 이벤트가 발생하고 해당하는 이벤트를 듣기 위해서는 동일한 EventEmitter객체를 사용해야한다.
