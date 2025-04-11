let num = 1;

// 일정한 간격별로 코드를 실행 (1초 마다 증가)
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// 인터벌은 계속 실행되기 때문에 중지시켜줘야함 (6초가 되면 중지)
setTimeout(() => {
  console.log("setTimeout!!");
  clearInterval(interval); // 인터벌 중지
}, 6000);
