import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  // console.log("요청한 경로: ", req.path);
  // console.log("요청한 헤더: ", req.headers);
  // console.log("요청한 파라미터: ", req.params);
  // console.log("요청한 쿼리: ", req.query);
  res.send("hello world");
});

app.get("/hi/:id", (req, res, next) => {
  console.log("요청한 파라미터: ", req.params);
  res.send(`hi의 id는 ${req.params.id} 입니다.`);
});

app.get("/by/:id", (req, res, next) => {
  console.log("요청한 쿼리: ", req.query);
  res.send(`요청한 쿼리는 ${req.params.id}번의 "${req.query.query}" 입니다.`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
