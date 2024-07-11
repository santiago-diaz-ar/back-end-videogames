require("dotenv").config();
const { Router } = require("express");
const genresRouter = Router();

const { API_KEY } = process.env;

const { genresControlador } = require("../controllers/genresControladores");

genresRouter.get("/", async (req, res) => {
  try {
    const datos = await genresControlador(API_KEY);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = genresRouter;
