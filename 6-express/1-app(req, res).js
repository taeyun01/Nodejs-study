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

app.get("/res", (req, res, next) => {
  // res.send("Hi!"); // send로 데이터를 보낼 수 있음
  // res.json({ myName: "Taeyun", myAge: 20 }); // json으로 데이터를 보낼 수 있음
  // res.sendStatus(400); // Status 코드로 응답
  res.setHeader("key", "hahahaha"); // 헤더에 특정한 값을 설정할 수 있음
  res.status(201).send("Created"); // 처리된 결과에 따라 상태코드를 보내고 원하는 데이터를 보낼 수 있음
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
