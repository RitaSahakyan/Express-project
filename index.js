const express = require("express");
const { loadViews, saveViews } = require("./viewsController");
const app = express();
const PORT = 3000;

const views = loadViews();
app.get("/", (req, res) => {
  views["/"] += 1;
  saveViews(views);
  res.send(
    `<h1>Главная страница</h1><p>Просмотров: ${views["/"]}</p> <a href="/about">Перейти на страницу "О нас"</a>`
  );
});
app.get("/about", (req, res) => {
  views["/about"] += 1;
  saveViews(views);
  res.send(
    `<h1>О нас</h1><p>Просмотров: ${views["/about"]}</p> <a href="/">Перейти на главную страницу</a>`
  );
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
