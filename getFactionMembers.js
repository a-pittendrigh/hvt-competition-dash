const makeRequest = require("./makeRequest");
const selectFaction = (factionId) => `faction/${factionId}?selections=`;

const hvtFactionId = 18736;

const getFactionMembers = async (factionId = hvtFactionId) => {
  return await makeRequest(selectFaction(factionId))
    .then((response) => {
      return response.data.members;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

module.exports = getFactionMembers;
