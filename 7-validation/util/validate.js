import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  // 유효성 검사 결과가 들어있고 메세지를 확인할 수 있음. 기본적인 메세지를 쓰기 싫고, 내가 원하는 메세지를 받고 싶다면 withMessage()에 메세지를 추가하면 됨.
  const errors = validationResult(req);

  // 유효성 검사 실패시 400 에러 반환
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    return res.status(400).json({ errors: errors.array()[0].msg }); // 클라이언트에게 하나의 메세지만 전달하고 싶다면 이렇게 해주면 됨.
  }

  // 유효성 검사를 통과했으면 다음 미들웨어로 넘어감
  return next();
};

export default validate;
