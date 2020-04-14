const makeRequest = require("./makeRequest");
const userPersonalStatsSelection = (userId) =>
  `user/${userId}?selections=personalstats`;

const getUserPersonalStats = async (userId) => {
  return await makeRequest(userPersonalStatsSelection(userId))
    .then((response) => {
      return response.data.personalstats;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

module.exports = getUserPersonalStats;
