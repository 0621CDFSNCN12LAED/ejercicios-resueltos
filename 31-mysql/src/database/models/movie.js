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

  return model;
};
