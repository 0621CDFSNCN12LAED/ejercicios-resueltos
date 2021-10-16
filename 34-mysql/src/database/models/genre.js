const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Genre",
    {
      name: DataTypes.STRING,
      ranking: DataTypes.INTEGER,
    },
    {
      tableName: "genres",
      timestamps: false,
    }
  );

  //Asociaciones
  model.associate = (models) => {
    model.hasMany(models.Movie, { as: "movies", foreignKey: "genre_id" });
  };

  return model;
};
