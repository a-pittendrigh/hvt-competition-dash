const axios = require("axios").default;
const baseUrl = "https://api.torn.com";
const withKey = require("./withKey");
const userPersonalStatsUrl = (userId) =>
  withKey(`${baseUrl}/user/${userId}?selections=personalstats`);

const getUserPersonalStats = async (userId) => {
  const personalStats = await axios
    .get(userPersonalStatsUrl(userId))
    .then((response) => {
      return response.data.personalstats;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  return personalStats;
};

module.exports = getUserPersonalStats;
