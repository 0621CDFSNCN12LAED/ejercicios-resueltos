const { Movie, Genre } = require("../database/models");
const moviesService = require("../services/movies-service");
const APIKEY = "d4e35e92";
const fetch = require("node-fetch");

const OMDBQueryBaseURL = `http://www.omdbapi.com/?apikey=${APIKEY}`;

const { Op } = require("sequelize");

module.exports = {
  search: async (req, res) => {
    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.titulo}%`,
        },
      },
    });
    if (movies.length > 0) {
      res.render("moviesList", { movies });
    } else {
      //REQUEST A OMDB

      const url = OMDBQueryBaseURL + `&s=${req.query.titulo}&type=movie`;

      const httpResult = await fetch(url);
      const movies = await httpResult.json();

      if (movies.Error) {
        res.send("Esa no la conoce ni el loro");
      } else {
        res.render("moviesList", {
          movies: movies.Search.map((omdbMovie) => {
            return {
              id: omdbMovie.imdbID,
              title: omdbMovie.Title,
            };
          }),
        });
      }
    }
  },

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
    if (movie) {
      res.render("moviesDetail", { movie });
    } else {
      const url = OMDBQueryBaseURL + `&i=${id}`;

      const httpResult = await fetch(url);
      const movie = await httpResult.json();

      if (movie.Error) {
        res.send("Ese id no es valido ni acá ni en omdb");
      } else {
        res.render("moviesDetailOmdb", {
          movie,
        });
      }
    }
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
