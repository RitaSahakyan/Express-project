const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "views.json");
function loadViews() {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Ошибка загрузки файла:", err);
  }
  return { "/": 0, "/about": 0 };
}
function saveViews(views) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(views, null, 2));
  } catch (err) {
    console.error("Ошибка сохранения файла:", err);
  }
}

module.exports = { loadViews, saveViews };
