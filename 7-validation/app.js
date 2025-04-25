import express from "express";
import validate from "./util/validate.js";
import { userValidation, emailValidation } from "./util/validation.js";

const app = express();

app.use(express.json());

app.post("/users", userValidation, validate, (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

//* email param에 관련해서 검사하고 싶을 때
app.get("/:email", emailValidation, validate, (req, res, next) => {
  res.send("📩 성공!");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
