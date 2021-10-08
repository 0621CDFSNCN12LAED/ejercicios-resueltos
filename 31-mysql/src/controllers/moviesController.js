const db = require("../database/models");

// ASYNC / AWAIT

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: async (req, res) => {
    const movies = await db.Movie.findAll({
      order: [
        ["release_date", "DESC"],
        ["title", "ASC"],
      ],
      limit: 5,
    });
    res.render("newestMovies", { movies });
  },
  recommended: async (req, res) => {
    const movies = await db.Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", { movies });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    const movie = await db.Movie.findByPk(id);
    res.render("moviesDetail", { movie });
  },
};
