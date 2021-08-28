const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

/* GET home page. */
router.get("/", mainController.home);
router.get("/detalle/:id", mainController.dishDetail);

module.exports = router;
