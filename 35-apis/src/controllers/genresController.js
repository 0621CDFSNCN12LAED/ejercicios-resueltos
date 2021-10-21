const { Genre } = require("../database/models");

module.exports = {
  list: async (req, res) => {
    const genres = await Genre.findAll();
    res.render("genresList", { genres });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    const genre = await Genre.findByPk(id);
    res.render("genresDetail", { genre });
  },
};
