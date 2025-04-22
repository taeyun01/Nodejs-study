import express from "express";
import fs from "fs";
const app = express();

app.use(express.json());

//* 비동기 처리
app.get("/file", (req, res, next) => {
  fs.readFile("./file.txt", "utf-8", (err, data) => {
    // 에러처리
    if (err) {
      return res.sendStatus(404);
    }
  });
});

//* 동기 처리
app.get("/file1", (req, res, next) => {
  //* 서버에서 동기적인 처리는 좋지 않지만 이렇게 했을 때의 문제점은 use에러로 에러 처리를 해도 사용자에게 에러 메세지를 적절하게 보내지 못한다.
  // const data = fs.readFileSync("./file.txt");
  // res.send(data);

  //* 사용자가 요청한 데이터가 존재하지 않으므로 위 처럼 작성하는 것보다는 try로 처리하는 것이 좋다.
  try {
    const data = fs.readFileSync("./file.txt");
    res.send(data);
  } catch (err) {
    res.sendStatus(404); //* 사용자에게 404 에러 메세지를 보내주어 요청한 파일이 없구나를 인지 시킨다.
  }
});

//* 비동기 처리 (프로미스를 하게 되면 콜백함수를 전달해줘야함)
app.get("/file2", (req, res, next) => {
  fsAsync
    .readFile("./file2.txt")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

//
app.get("/file3", async (req, res, next) => {
  try {
    const data = await fsAsync.readFile("./file3.txt");
    res.send(data);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "서버 에러" });
});

app.listen(8080);
