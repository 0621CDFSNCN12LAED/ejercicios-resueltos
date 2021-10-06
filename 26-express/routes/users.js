var { Router } = require("express");
var router = Router();

const checkValidation = require("../middlewares/check-validation");
const userFormValidation = require("../validations/user-form-validation");

router.post("/", userFormValidation, checkValidation, function (req, res) {
  res.cookie("user", JSON.stringify(req.body));
  res.render("welcome", { user: req.body });
});

module.exports = router;
