import { Router } from "express";
const router = Router();

router.get("/info", (request, response) => {
  response.json({ phrase: "gotta dig!", block: "dirt" });
});

router.get("/error", (request, response) => {
  response.status(400).send("Bad request");
});

router.get("/status", (req, res) => {
  res.json({ status: "ok", uptime: `${process.uptime()}` });
});

export default router;
