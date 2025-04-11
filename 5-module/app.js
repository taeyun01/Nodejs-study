// import { increase, getCounter } from "./counter.js"; // .js 확장자명을 꼭 명시해줘야함
import * as counter from "./counter.js"; // 위 처럼 하나하나 가져오기 싫다면 한번에 가져와 별칭을 적어 사용

// increase();
// getCounter();
counter.increase();
counter.getCounter();
console.log(counter.getCounter());
