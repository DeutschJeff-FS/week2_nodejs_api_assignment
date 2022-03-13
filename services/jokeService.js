const axios = require("axios");

const jokeService = () => {
  console.log("Real Joke");

  return axios.get(`${process.env.url}`).then((result) => {
    return result.data;
  });
};

const jokeServiceById = (id) => {
  console.log("Real Joke by Id");

  return axios.get(`${process.env.url}?idRange=${id}`).then((result) => {
    return result.data;
  });
};

module.exports = { jokeService, jokeServiceById };
