const axios = require("axios").default;
const baseUrl = "https://api.torn.com";
const withKey = require("./withKey");
const factionMemberlistUrl = (factionId) =>
  withKey(`${baseUrl}/faction/${factionId}?selections=`);

const hvtFactionId = 18736;

const getFactionMembers = async (factionId = hvtFactionId) => {
  return await axios
    .get(factionMemberlistUrl(factionId))
    .then((response) => {
      return response.data.members;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

module.exports = getFactionMembers;
