const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Nombre no puede estar vacio"),
  body("mail")
    .notEmpty()
    .withMessage("Mail no puede estar vacio")
    .bail()
    .isEmail()
    .withMessage("El mail tiene que ser un mail valido"),
  body("color")
    .notEmpty()
    .withMessage("Se debe seleccionar un color")
    .isIn(["white", "purple", "crimson", "orchid", "aqua"]),
  body("age").notEmpty().withMessage("Edad no puede estar vacio"),
];
