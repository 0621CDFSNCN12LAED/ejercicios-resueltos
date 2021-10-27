const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const assertAdmin = require("../middlewares/assert-admin");

router.get("/movies", moviesController.list);
router.get("/movies/buscar", moviesController.search);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recommended);
router.get("/movies/detail/:id", moviesController.detail);

router.get("/movies/add", assertAdmin, moviesController.add);
router.post("/movies/create", assertAdmin, moviesController.create);

router.get("/movies/edit/:id", assertAdmin, moviesController.edit);
router.put("/movies/update/:id", assertAdmin, moviesController.update);

router.get("/movies/delete/:id", assertAdmin, moviesController.delete);
router.delete("/movies/destroy/:id", assertAdmin, moviesController.destroy);

module.exports = router;
