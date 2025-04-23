import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json());

//* 3. use를 사용하여 상위 경로를 묶어서 처리 (Best)
app.use("/posts", postRouter);
app.use("/users", userRouter);

//* 2. 중복되는 경로를 줄이기 위해서 route 사용
//*    하지만 이것도 길어지면 유지보수도 어렵고 가독성도 좋지 않음
// app
//   .route("/posts")
//   .get((req, res) => {
//     res.status(201).send("GET: /posts");
//   })
//   .post((req, res) => {
//     res.status(201).send("POST: /posts");
//   });

// app
//   .route("/posts/:id")
//   .put((req, res) => {
//     res.status(200).send("PUT: /posts/:id");
//   })
//   .delete((req, res) => {
//     res.status(200).send("DELETE: /posts/:id");
//   });

//* 1. 기존 경로 처리 방식
// app.get("/posts", (req, res) => {
//   res.status(201).send("GET: /posts");
// });

// app.post("/posts", (req, res) => {
//   res.status(201).send("POST: /posts");
// });

// app.put("/posts/:id", (req, res) => {
//   res.status(200).send("PUT: /posts");
// });

// app.delete("/posts/:id", (req, res) => {
//   res.status(200).send("DELETE: /posts");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
