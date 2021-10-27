const express = require("express");

const router = express.Router();

const genresRouter = require("./genresRoutes");
router.use(genresRouter);
const moviesRouter = require("./moviesRoutes");
router.use(moviesRouter);
// const actorsRoutes = require("./actorsRoutes");
// router.use(actorsRoutes);

module.exports = router;
