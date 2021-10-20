const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Actor",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    {
      tableName: "actors",
      timestamps: false,
    }
  );

  //Asociaciones
  model.associate = (models) => {
    model.belongsToMany(models.Movie, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };

  return model;
};
