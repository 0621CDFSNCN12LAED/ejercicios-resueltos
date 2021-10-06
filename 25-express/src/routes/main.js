// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

const miMiddleware = require("../middlewares/helloMiddleware");

router.get("/", mainController.index);
router.get("/search", miMiddleware(["Greta", "Ada"]), mainController.search);
router.get(
    "/admin",
    miMiddleware(["Greta", "Ada", "Vim", "Tim"]),
    mainController.admin
);

module.exports = router;
