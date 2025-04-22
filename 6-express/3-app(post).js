import express from "express";

const app = express();

app.use(express.json()); // req.body를 읽어오는 미들웨어

//* post로 처리한다는것은 사용자가 무언가를 만든다는 것이기 때문에 request에서 body를 읽어와야한다
app.post("/", (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);
