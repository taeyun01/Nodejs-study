const bcrypt = require("bcrypt");

const password = "123456789";

// 비밀번호 암호화
const hash = bcrypt.hashSync(password, 5); // 8~10, 10~12정도 추천 (결국 암호화는 계산하는거기 때문에 cpu에 부하가 많이됨)
console.log(`패스워드: ${password}, 해시: ${hash}`); // 해시된 패스워드는 db에 저장

// 비밀번호 확인
const result = bcrypt.compareSync("123dsa", hash); // 비교할때는 원래 패스워드를 넣어서 비교, 틀리면 false, 맞으면 true 반환
console.log(`비교결과: ${result}`);
