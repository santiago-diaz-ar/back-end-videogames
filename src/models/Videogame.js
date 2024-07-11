const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Videogame", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    plataforms: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    release_date: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
  });
};
