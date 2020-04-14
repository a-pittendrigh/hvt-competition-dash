const axios = require("axios").default;
const withKey = require("./withKey");
const baseUrl = "https://api.torn.com";

const makeRequest = (selection) =>
  axios.get(withKey(`${baseUrl}/${selection}`));

//const makeRequest = (url) => axios.get(withKey(url));

module.exports = makeRequest;
