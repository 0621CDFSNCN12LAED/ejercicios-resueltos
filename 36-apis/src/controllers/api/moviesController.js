const { Movie } = require("../../database/models");

module.exports = {
  create: async (req, res) => {
    const movie = await Movie.create(req.body);
    res.send({
      meta: {
        status: 201,
        url: "api/movies",
      },
      data: movie,
    });
  },
  destroy: (req, res) => {
    res.send("MOVIE DESTROY");
  },
};
