const axios = require("axios");
require("dotenv").config();

const { Videogame } = require("../db");

const videogames = async (api_key) => {
  const api = await axios(`https://api.rawg.io/api/games?key=${api_key}`);
  return api.data;
};

const videoGamesId = async (id, API_KEY) => {
  const apiId = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  return apiId.data;
};

/* https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=bb66399c2b3b43f1b33263d6135fa4ba
 */

const videoGamesName = async (searchName, API_KEY) => {
  const apiName = await axios(
    `https://api.rawg.io/api/games?search=${searchName}&key=${API_KEY}`
  );
  return apiName;
};

// POST

const videoGamePost = async (
  name,
  description,
  plataforms,
  image,
  release_date,
  rating
) => {
  const add = await Videogame.create({
    name,
    description,
    plataforms,
    image,
    release_date,
    rating,
  });
  return add;
};

module.exports = { videogames, videoGamesId, videoGamesName, videoGamePost };
