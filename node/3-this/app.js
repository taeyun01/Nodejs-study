function hello() {
  console.log(this); // 함수안에서 this는 global을 가리킴
  console.log(this === global); // true
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("======class=======");
    console.log(this); // class 안에서 this는 클래스 자체를 가리킴 (즉, this는 class A)
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

console.log("======global scope=======");
console.log(this); // global scope에서 this를 출력해보면 {}가 나온다.
console.log(this === module.exports); // nodejs에서 this는 module.exports를 가르키고 있다.

// this는 어디서 사용하냐에 따라서 달라질 수 있기 때문에 주의해야 한다.
