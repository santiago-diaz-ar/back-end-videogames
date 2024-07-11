require("dotenv").config();
const { Router } = require("express");
const gamesRouter = Router();

const { API_KEY } = process.env;

// Funciones Controladores
const {
  videogames,
  videoGamesId,
  videoGamesName,
  videoGamePost,
} = require("../controllers/videogamesControladores");

gamesRouter.get("/", async (req, res) => {
  try {
    const datos = await videogames(API_KEY);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

gamesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await videoGamesId(id, API_KEY);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error);
  }
});

gamesRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  console.log(req.params);
  try {
    const datos = await videoGamesName(name, API_KEY);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

gamesRouter.post("/PostVideogame", async (req, res) => {
  const { name, description, plataforms, image, release_date, rating } =
    req.body;
  try {
    const creacion = await videoGamePost(
      name,
      description,
      plataforms,
      image,
      release_date,
      rating
    );
    return res.status(200).json(creacion);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});
module.exports = gamesRouter;
