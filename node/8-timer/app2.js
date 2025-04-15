console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0"); // setTimeout()이 정확히 0초가 걸리지 않는걸 확인할 수 있다.
  // 실제로 콜백함수가 실해되기 위해서는 콜스택이 비워질때 까지 기다리다가 비워지면 실행된다. (그래서 0초가 되지 않는다.) for loop같이 처리해야 할 연산들이 많다면 더 오래걸린다.
  console.log("setTimeout 0");
}, 0);

// console.log("code2");
// setImmediate(() => {
//   console.log("setImmediate");
// });

// console.log("code3");
// process.nextTick(() => {
//   console.log("nextTick");
// });

//* setTimeout과 setImmediate는 거의 동일하다. 큰 차이는 없기 때문에 순차적으로 들어온다고 보면된다.
