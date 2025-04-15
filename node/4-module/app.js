//* 규모있는 프로젝트를 만들 때 모듈을 항상 써야한다.
//* 모듈은 파일 하나 하나를 의미한다. (콘솔 모듈, 네트워크 모듈, http 모듈 등등 연관 되어 있는게 묶여 있는 것처럼)
//* 우리가 프로젝트를 만들때도 연관있는 애들은 한 파일내에 모듈별로 관리하는 것이 좋다.

const counter = require("./counter");

counter.increase();
counter.getCounter();
console.log(counter.getCounter());
