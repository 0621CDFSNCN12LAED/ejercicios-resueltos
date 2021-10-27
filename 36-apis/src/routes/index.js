const express = require("express");
const genresRouter = require("./genresRoutes");
const apiRouter = require("./api/index");
const moviesRouter = require("./moviesRoutes");
const authRouter = require("./authRoutes");
const loginMiddleware = require("../middlewares/login-middleware");

const router = express.Router();

router.use(loginMiddleware);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Digital Movies" });
});

router.use(genresRouter);
router.use(moviesRouter);
router.use(authRouter);
router.use("/api", apiRouter);

module.exports = router;
