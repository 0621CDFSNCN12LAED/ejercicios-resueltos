const { Movie } = require("../database/models");

module.exports = {
  delete: async (id) => {
    await Movie.destroy({
      where: {
        id: id,
      },
    });
  },
};
