const { validationResult } = require("express-validator");

module.exports = function checkValidation(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.render("index", { errors: result.array() });
  } else {
    next();
  }
};
