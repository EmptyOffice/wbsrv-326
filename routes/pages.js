import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, web!");
});

router.get("/about", (req, res) => {
  res.send("This is where magic happens.");
});

router.get("/about-me", (req, res) => {
  res.send("Student, doing work.");
});

router.get("/about/:user", (request, response) => {
  const user = request.params.user;
  response.send(`Who really knows who ${user} is anyway..`);
});

router.get("/:store/:food", (request, response) => {
  const open_stores = new Array("Walmart", "Target", "Aldi");
  const { store, food } = request.params;
  if (open_stores.includes(store)) {
    response.send(`${store} might have some ${food} in stock`);
  } else {
    response.send(`${store} is not open to get ${food} at this time`);
  }
});

//http://localhost:3000/count?min=1
router.get("/count", (request, response) => {
  const min = Number(request.query.min) || 0;
  const limit = Number(request.query.limit) || 10;
  let bucket = new Array();
  for (let i = min; i < limit; i++) {
    bucket.push(i);
  }
  response.send(bucket);
});

router.get("/:word", (request, response) => {
  const word = request.params.word;
  response.send(`${word} ${word} ${word} ${word} ${word}`);
});

export default router;
