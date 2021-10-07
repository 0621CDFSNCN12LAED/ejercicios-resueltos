const db = require("../database/models");

// ASYNC / AWAIT

module.exports = {
  list: async (req, res) => {
    console.time("await");
    const moviesAwait = await db.Movie.findAll();
    const genresAWait = await db.Genre.findAll();
    console.timeEnd("await");

    console.time("PromiseAll");
    const promiseArray = [db.Movie.findAll(), db.Genre.findAll()];
    const [movies, genres] = await Promise.all(promiseArray);
    console.timeEnd("PromiseAll");

    res.render("moviesList", { movies, genres });
  },
};
