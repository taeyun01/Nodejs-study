import { body, param } from "express-validator";
//* npm i express-validator 를 사용하여 유효성 검사하기

//* body 안에 있는 것을 확인하고 싶을 때 사용
const userValidation = [
  body("name")
    //* 순서 중요!
    .trim() // 공백 제거
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
    .trim()
    .notEmpty()
    .withMessage("이메일을 입력해주세요.")
    .isEmail()
    .withMessage("이메일 형식이 올바르지 않습니다.")
    .normalizeEmail({
      // F12 확인해보면 여러가지 옵션들이 있음 아래는 normalizeEmail에 있는 옵션들인데 기본으로 true로 설정되어 있음
      // all_lowercase: true, // 모든 이메일을 소문자로 변환
      // gmail_lowercase: true, // 구글 이메일을 소문자로 변환
      // gmail_remove_dots: true, // 구글 이메일에서 점을 제거
      // gmail_remove_subaddress: true, // 구글 이메일에서 서브 주소를 제거
      // gmail_convert_googlemaildotcom: true, // 구글 이메일에서 googlemail.com을 gmail.com으로 변환
      // outlookdotcom_lowercase: true, // 오프라인 이메일을 소문자로 변환
      // outlookdotcom_remove_subaddress: true, // 오프라인 이메일에서 서브 주소를 제거
      // yahoo_lowercase: true, // 야후 이메일을 소문자로 변환
      // yahoo_remove_subaddress: true, // 야후 이메일에서 서브 주소를 제거
      // icloud_lowercase: true, // 아이클라우드 이메일을 소문자로 변환
      // icloud_remove_subaddress: true, // 아이클라우드 이메일에서 서브 주소를 제거
    }), // normalizeEmail()은 형식을 정규화해서 처리해줌 ex) 소문자만 써야하는데 사용자가 대문자로 입력했다면 소문자로 전부 바꿔줌)
  body("job.name").notEmpty().withMessage("직업을 입력해주세요."), // 객체 안에 있는 값도 검사할 수 있음.
  body("job.title").notEmpty().withMessage("직책을 입력해주세요."),
];

//* check()은 param이랑 body랑 들어있는 모든 이메일에 대해서 검사할 수 있음 하지만 비용이 좀 더 발생하기 때문에 명확하게 param이라고 명시해주는 것이 더 좋음
const emailValidation = param("email")
  .isEmail()
  .withMessage("이메일 형식이 올바르지 않습니다.");

export { userValidation, emailValidation };
