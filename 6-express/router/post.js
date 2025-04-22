import express from "express";

const router = express.Router();

//* /posts를 app.use에서 이미 설정 했으므로 생략
router.get("/", (req, res) => {
  res.status(201).send("GET: /posts");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /posts");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
