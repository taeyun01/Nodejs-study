import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500", // 이 주소에 한해서 내 서버에 있는 데이터를 보여줄 수 있도록 허용
  optionsSuccessStatus: 200,
  credentials: true, // -> Access-Control-Allow-Credentials: true
};

//* 유용한 외부 미들웨어 3가지 (커뮤니티에서 자주 사용되는 라이브러리)
//* npm i cookie-parser morgan helmet

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //* 1. 쿠키를 파싱하여 받을 수 있도록 해줌
app.use(morgan("dev")); //* 2. 요청과 응답에 대한 정보를 로그로 남겨줌
app.use(cors(corsOptions));

app.use(helmet()); //* 3. 공통적으로 보안에 필요한 헤더를 추가해 설정해줌 (https://helmetjs.github.io)문서 참고

app.get("/", (req, res) => {
  console.log("body: ", req.body); // app.use(express.json()); 을 추가해줘야 body 값을 파싱하여 받을 수 있음
  console.log("cookies: ", req.cookies); // 위 처럼 cookieParser 를 추가해줘야 cookies 값을 파싱하여 받을 수 있음
  console.log("cookies 값: ", req.cookies.hoho_cookie);
  console.log("cookies 값: ", req.cookies.tasty_cookie);
  //* 우리가 사용자에게 요청을 받을 때 마다 어떤 요청을 받았는지 또 얼마나 걸렸는지 로그를 남기고 싶을 때 각각 라우터 콜백함수마다 콘솔을 찍어주면 너무 번거롭다.
  //* 이럴 때 사용하는 미들웨어가 morgan 이다.
  console.log("GET ", req.method);
  res.send("Hello World!!!");
});

app.listen(8080);
