const axios = require("axios");

const genresControlador = async (api_key) => {
  const api = await axios(`https://api.rawg.io/api/genres?key=${api_key}`);
  return api.data.results;
};

module.exports = { genresControlador };
