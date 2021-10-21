const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    next();
  } else {
    //TODO: enviar los errores de validacion
    res.redirect("back");
  }
};
