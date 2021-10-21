const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const assertValidations = require("../validations/assert-validations");
const loginValidations = require("../validations/login-validations");
const registerValidations = require("../validations/register-validations");

router.get("/login", authController.showLogin);
router.post(
  "/login",
  loginValidations,
  assertValidations,
  authController.login
);

router.get("/register", authController.showRegister);
router.post(
  "/register",
  registerValidations,
  assertValidations,
  authController.register
);

module.exports = router;
