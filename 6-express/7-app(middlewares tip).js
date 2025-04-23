import express from "express";

const app = express();

//* 유용한 미들웨어들
app.use(express.json()); // REST API, Body-Parser
// HTML Form -> Body (Form에서 submit을 하면 request가 발생하는데 그때 전달된 HTML에서 만든 데이터를 Body안으로 자동으로 파싱해서 넣어줌)
app.use(express.urlencoded({ extended: false }));

const options = {
  dotfiles: "ignore", // 숨겨진 파일은 무시
  etag: false,
  index: false,
  maxAge: "1d", // 캐시 시간 설정
  redirect: false,
  setHeaders: (res, path, stat) => {
    // 헤더에 보낼 때 필요한 데이터가 있다면 추가해서 보낼 수 있음
    res.setHeader("x-timestamp", Date.now());
  },
};
//* 정적 파일 서비스
app.use(express.static("public", {})); // public 폴더 안에 있는 파일들을 정적 파일로 서비스 (즉, 사용자가 읽어갈 수 있도록 만듬. 주소에 http://localhost:8080/index.html 이렇게 파일을 접근할 수 있음)

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(8080);
