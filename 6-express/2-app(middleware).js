import express from "express";

const app = express();

//* app.all과 app.use의 비슷하지만 차이점
//* all: /all 경로에 진입시 어떤 Request Method(POST,GET,UPDATE,DELETE)로 보내든 항상 수행이됨
//*      대신 all/doc 특정한 경로로 보내면 all이 호출되지 않는다. 그래서 /all 경로에 한해서만 수행이된다.
app.all("/all", (req, res, next) => {
  console.log("all.");
  next();
});
//* use: /use 경로에 진입하던 /use/doc 경로에 진입하던 항상 use가 호출이 된다. 그 뒤에 이어지는 어떠한 경로라도 호출됨 (/use/doc/123/posts/...)
app.use("/use", (req, res, next) => {
  console.log("use.");
  next();
});

//* 미들웨어는 설정된 순서가 굉장히 중요하다.
//* next()를 호출해서 다음으로 넘어가던지 응답(res)을 보내던지 해야함
app.get(
  "/",
  (req, res, next) => {
    console.log("First Middleware");
    res.send("First Middleware"); // 만약 응답을 했다면 다음 First2 미들웨어는 호출되지 않음 (다음 코드로는 넘어감)
    // next(); // next()해주면 다음 미들웨어로 넘어감 (응답(res)이나 next()를 호출하지 않으면 서버는 멈춰있음)
    // next("route"); // route로 설정하면 아래 First2는 무시되고 다음 라우터로 넘어감
    // next(new Error("error!")); // 에러 핸들러로 넘어감
    //?? 가장 중요한것!!
    if (true) {
      //?? 클라이언트에게 응답을 보낸 후
      return res.send("First Middleware");
    }
    //?? 다시한번 또 응답을 보내면 안됨 (에러 발생) 그래서 항상 리턴을 붙여줘야함
    res.send("First Middleware");
  },
  (req, res, next) => {
    console.log("First2 Middleware");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("Second Middleware");
  res.send("Hello World");
});

app.use((req, res, next) => {
  res.status(404).send("페이지를 찾을 수 없습니다! 😔");
});

// 에러 핸들러를 무조건 설정해줘야함 (에러가 발생하면 이 라우터로 옴)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("다시 시도해주세요!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
