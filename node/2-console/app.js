console.log("logging");
// console.clear(); // 이전에 있던 로그들 다 지움

//* log level
// 개발할 때도 웬만하면 log level별로 쓰면 좋다.
// 배포할 때는 웬만하면 log level별로 정말 출력할 건지 파일에 저장할 건지를 컨트롤 해야한다.
console.log("log"); // 개발
console.info("info"); // 정말 중요한 정보를 남기고 싶을 때
console.warn("warn"); // 경고
console.error("error"); // 에러, 사용자 에러, 시스템 에러

//* assert (조건이 true가 아닐 때만 출력, 참이 아닌 경우만)
console.assert(1 === 2, "1은 2가 아니다");
console.assert(1 === 1, "1은 1이다");

//* print object
const student = {
  name: "John",
  age: 20,
  gender: "male",
  company: {
    name: "AC",
  },
};

console.log(student);
console.table(student); // object를 테이블 형식으로 더 보기 편하게 출력 해줌
// object를 더 자세히 출력 (https://nodejs.org/docs/v22.14.0/api/console.html#consoledirobj-options)
console.dir(student, {
  showHidden: true,
  colors: false,
  depth: 2, // 중첩된 객체의 깊이 2 => { name: 'John', age: 20, gender: 'male', company: { name: 'AC' } }
  // depth: 0, // 0으로 했을 때 출력 값 => { name: 'John', age: 20, gender: 'male', company: [Object] }
});

//* measuring time (시간을 측정)
console.time("for loop"); // 시간 측정 시작 (시간 측정 이름은 동일하게)
for (let i = 0; i < 1000; i++) {
  i++;
}
console.timeEnd("for loop"); // 시간 측정 끝

//* counting (몇 번 호출했는지 확인하고 싶을 때)
function a() {
  console.count("a function");
}

a();
a();
// console.countReset("a function"); // 카운트 초기화
a();
a();

//* trace (함수 호출 스택을 출력 (디버깅할 때 유용))
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace(); // 함수 호출 스택을 출력 (디버깅할 때 유용)
}

f1();
