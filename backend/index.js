const express = require("express");
const path = require("path");
const CONFIG = require("@yarn-monorepo/config");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.listen(CONFIG.PORT, (err) => {
  if (err) {
    console.error("error: ", err);
  }
  console.log("listening on port ", CONFIG.PORT);
});
