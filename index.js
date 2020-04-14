const getPersonalStats = require("./getPersonalStats");
const getFactionMembers = require("./getFactionMembers");

async function start() {
  console.log(await getPersonalStats(2464998));
  //console.log(await getFactionMembers());
}

start();
