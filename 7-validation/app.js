import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();

app.use(express.json());

//* npm i express-validator 를 사용하여 유효성 검사하기
app.post(
  "/users",
  //* body 안에 있는 것을 확인하고 싶을 때 사용
  body("name")
    .notEmpty() // 이름 인풋이 비어있다면
    .withMessage("이름을 입력해주세요.") // 메세지 전달
    .isLength({ min: 2 }) // 이름은 최소 2글자 이상이어야 함
    .withMessage("이름은 최소 2글자 이상이어야 합니다"), // 2글자 이상이 아니면 메세지 전달
  body("age")
    .notEmpty()
    .withMessage("나이를 입력해주세요.")
    .isInt()
    .withMessage("숫자를 입력해주세요."),
  body("email")
    .notEmpty()
    .withMessage("이메일을 입력해주세요.")
    .isEmail()
    .withMessage("이메일 형식이 올바르지 않습니다."),
  body("job.name").notEmpty().withMessage("직업을 입력해주세요."), // 객체 안에 있는 값도 검사할 수 있음.
  body("job.title").notEmpty().withMessage("직책을 입력해주세요."),
  (req, res) => {
    const errors = validationResult(req);
    // console.log(errors); // 유효성 검사 결과가 들어있고 메세지를 확인할 수 있음. 기본적인 메세지를 쓰기 싫고, 내가 원하는 메세지를 받고 싶다면 withMessage()에 메세지를 추가하면 됨.

    // 에러가 있지만 비어있지 않다면 에러가 발생했으므로 400 에러 반환
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.sendStatus(201);
  }
);

//* email param에 관련해서 검사하고 싶을 때
app.get(
  "/:email",
  //* check()은 param이랑 body랑 들어있는 모든 이메일에 대해서 검사할 수 있음 하지만 비용이 좀 더 발생하기 때문에 명확하게 param이라고 명시해주는 것이 더 좋음
  param("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("📩 성공!");
  }
);

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
