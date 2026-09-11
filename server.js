import express from "express";
import pagesRouter from "./routes/pages.js";
import apiRouter from "./routes/api.js";
const app = express();
const PORT = 3000;

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

app.get("/projects", (req, res) => {
  const tag = req.query.tag;
  if (!tag) return res.json(projects);
  res.send(projects.filter((project) => project.tag === tag));
});

app.use("/api", apiRouter);
app.use("/", pagesRouter);

app.use((request, response) => {
  response.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
