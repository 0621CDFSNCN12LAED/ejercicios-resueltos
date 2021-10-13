const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      rating: DataTypes.DECIMAL,
      release_date: DataTypes.DATE,
      length: DataTypes.INTEGER,
      awards: DataTypes.INTEGER,
    },
    {
      tableName: "movies",
      timestamps: false,
    }
  );

  //Asociaciones
  model.associate = (models) => {
    model.belongsTo(models.Genre, { as: "genre", foreignKey: "genre_id" });
    model.belongsToMany(models.Actor, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return model;
};
