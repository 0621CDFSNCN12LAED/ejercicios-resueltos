const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Digital Movies" });
});

const genresRouter = require("./genresRoutes");
const moviesRouter = require("./moviesRoutes");

router.use(genresRouter);
router.use(moviesRouter);

module.exports = router;
