const jwt = require("jsonwebtoken");

const secretKey = "%3GH)Yu/43>p]4xm5CQ{&;yp%.R+}7LL"; // 시크릿키는 서버에 가지고 있을 중요한 데이터 이므로 서버에서만 보관하고 있는 시크릿키를 만들면 됨 (그냥 임의적인 문자열 아무거나 써도 되지만 https://www.lastpass.com/features/password-generator 해당 사이트에서 32길이로 생성하는 걸 추천)

// jwt 토큰 생성
const token = jwt.sign(
  {
    id: "taeyun",
    isAdmin: false,
  },
  secretKey,
  { expiresIn: 3 } // 토큰 만료 시간 설정 (무제한 유효하기 때문에 그러면 해킹당할 확률이 높음)
);

console.log(token);

// jwt 토큰 검증
// jwt.verify(token, secretKey, (err, decoded) => {
//   // console.log(err, decoded);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(decoded);
//   }
// });

// 토큰 만료시간을 3초로 설정해서 3초가 지나면 토큰 검증 시 에러가 발생하는 것을 확인할 수 있음
// 더 이상 토큰이 유효하지 않도록 만들 수 있음
setTimeout(() => {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decoded);
    }
  });
}, 3000);
