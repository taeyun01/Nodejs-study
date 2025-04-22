import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  console.log("요청한 메서드: ", req.method);
  res.send("hello world"); // 응답을 해주지 않으면 브라우저에서 계속 대기 상태가 됨
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
