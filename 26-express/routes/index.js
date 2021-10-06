var express = require("express");
var router = express.Router();

const getUser = require("../middlewares/get-user");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/home", getUser, function (req, res, next) {
  res.render("home", { user: req.user });
});

module.exports = router;
