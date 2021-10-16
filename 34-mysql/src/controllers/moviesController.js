const { Movie, Genre } = require("../database/models");
const moviesService = require("../services/movies-service");

// ASYNC / AWAIT

module.exports = {
  list: (req, res) => {
    Movie.findAll({
      include: [{ association: "genre" }, { association: "actors" }],
    }).then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: async (req, res) => {
    const movies = await Movie.findAll({
      order: [
        ["release_date", "DESC"],
        ["title", "ASC"],
      ],
      limit: 5,
    });
    res.render("newestMovies", { movies });
  },
  recommended: async (req, res) => {
    const movies = await Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", { movies });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    res.render("moviesDetail", { movie });
  },

  add: (req, res) => {
    res.render("moviesAdd");
  },
  create: async (req, res) => {
    await Movie.create(req.body);
    res.redirect("/movies");
  },

  edit: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, { include: ["genre"] });
    const genres = await Genre.findAll();
    res.render("moviesEdit", { movie, genres });
  },

  update: async (req, res) => {
    await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect(`/movies/detail/${req.params.id}`);
  },

  delete: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    res.render("moviesDelete", { movie });
  },

  destroy: async (req, res) => {
    await moviesService.delete(req.params.id);
    res.redirect("/movies");
  },
};
