//* 이벤트에 관련에서 어떻게 활용할 수 있는지 알아보고
//* 자주 실수하는 내용도 알아보자

const EventEmitter = require("events");
// const emitter = new EventEmitter(); // 11. emitter는 만들 필요 없고

// 9. 우리가 원하는것을 하기위해 어떻게 개선할 수 있을까?
// 10. 우리 스스로 EventEmitter가 되면 된다.
// 12. 클래스 Logger는 EventEmitter를 상속받는다. (Logger는 EventEmitter에 들어있는 모든 함수들과 속성들을 가지게 된다.)
class Logger extends EventEmitter {
  // log 함수 추가 (callback를 받으면 "log"이벤트가 실행됨 )
  log(callback) {
    this.emit("log", "started..."); // 13. Logger함수 자체는 emit함수를 가지고 있다.
    callback(); // 전달받은 콜백함수 실행
    this.emit("log", "ended!"); // 14. class니까 나 자신의 함수를 호출해야 되므로 this를 사용해서 호출해야함
  }
}

//* 우선 우리가 어떤 함수를 실행하기 전과 후에 이벤트를 발생시키고 싶은 일을 만들고 싶다고 가정해보자
// 특정한 함수를 인자로 받음 //! (이렇게 사용하면 main.js에서 사용할 수 없음 클래스로 만들어서 사용해야함)
// function log(callback) {
//   emitter.emit("log", "started..."); // log라는 이벤트 발생시킴 (시작)
//   callback(); // 전달받은 콜백함수 실행
//   emitter.emit("log", "ended!"); // 끝났다고 이벤트 발생시킴
// }

// module.exports.log = log;
module.exports.Logger = Logger; // 15. 외북에서도 쓸 수 있게 만들어 주면된다.

//* 가장 중요한 포인트
//* 이벤트 emitter는 한번 객체를 만들면 그 갹채내에서 발생하는 이벤트에 한해서 들을 수 있다.
//* 여러가지 이벤트 emitter 객체를 만들면 다른 emitter에서 발생하는 이벤트는 다른 emitter에서 들을 수 없다.
