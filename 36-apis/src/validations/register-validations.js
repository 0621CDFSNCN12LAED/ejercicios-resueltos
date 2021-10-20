const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Campo no puede estar vacío"),
  body("email")
    .notEmpty()
    .withMessage("Campo no puede estar vacío")
    .bail()
    .isEmail()
    .withMessage("Campo debe ser un email"),
  body("password")
    .notEmpty()
    .withMessage("Campo no puede estar vacío")
    .bail()
    .custom((value, { req }) => {
      return value == req.body.repeatPassword;
    })
    .withMessage("Contraseña y repetir contraseña deben ser idénticos"),
];
