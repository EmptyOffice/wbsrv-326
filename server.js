import express from "express";
import pagesRouter from "./routes/pages.js";
import apiRouter from "./routes/api.js";
import { join } from "node:path";
import { request } from "node:http";
const app = express();
const PORT = 3000;
const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/entries", (req, res) => {
  const entries = [
    { title: "First note" },
    { title: "Second note" },
    { title: "Third note" },
  ];
  res.render("entries", { title: "My Notes", entries });
});

app.get("/events", (request, response) => {
  const events = [{ title: "Event 1" }, { title: "Event 2" }];
  response.render("events", { title: "My Events", events });
});


app.get("/", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

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
