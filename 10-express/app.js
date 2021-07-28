const path = require("path");

const express = require("express");
const app = express();
app.listen(3000);

const staticMiddleware = express.static(path.join(__dirname, "public"));
app.use(staticMiddleware);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});
