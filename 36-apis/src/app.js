const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const expressSession = require("express-session");

const indexRouter = require("./routes/index");

const app = express();

app.locals.isAdmin = (user) => {
  return user && user.admin;
};

app.use(
  expressSession({
    secret: "los gatitos son lo mejor",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", indexRouter);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
