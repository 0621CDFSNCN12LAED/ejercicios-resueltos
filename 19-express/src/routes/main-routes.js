const express = require("express");

const router = express.Router();

const mainController = require("../controllers/main-controller");

//definir una ruta
//  -> Metodo de HTTP: GET, POST, DELETE, PUT/PATCH
//  -> La ruta o path: "/"
//  -> "Qué va pasar cuando se comuniquen a esa ruta por ese metodo"-> Handler o Controlador
// GET /
router.get("/", mainController.home);
router.get("/about", mainController.about);

module.exports = router;
