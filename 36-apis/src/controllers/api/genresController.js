const { Genre } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    const genres = await Genre.findAll();
    res.json({
      meta: {
        status: 200,
        total: genres.length,
        url: "api/genres",
      },
      data: genres,
    });
  },
  detail: async (req, res) => {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      res.json({
        meta: {
          status: 200,
          url: "api/genres/" + req.params.id,
        },
        data: genre,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: "api/genres/" + req.params.id,
        },
        data: "No se encontró el género con id: '" + req.params.id + "'",
      });
    }
  },
};
