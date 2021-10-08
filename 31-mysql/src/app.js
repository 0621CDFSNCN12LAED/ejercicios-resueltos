const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", indexRouter);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3001"));
