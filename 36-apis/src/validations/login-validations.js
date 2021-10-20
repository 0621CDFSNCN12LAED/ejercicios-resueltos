const { body } = require("express-validator");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Campo no puede estar vacío")
    .bail()
    .isEmail()
    .withMessage("Campo debe ser un email"),
  body("password").notEmpty().withMessage("Campo no puede estar vacío"),
];
