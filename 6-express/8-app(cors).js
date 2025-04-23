import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"], // 허용할 도메인 목록
    optionsSuccessStatus: 200, // 200 응답 코드를 사용하여 성공 상태를 나타냄
    credentials: true, // Access-Control-Allow-Credentials: true -> 이거랑 동일 (헤더에 토큰이나 사용자 정보를 추가하는것을 허용한다면 설정)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   //* 이렇게 오타날 가능성도 높고 번거롭게 작성하는 것보다는 cors 미들웨어 라이브러리를 사용하는게 좋음
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(8080);
