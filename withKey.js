const key = require("./key");
module.exports = (requestUrl) => `${requestUrl}&key=${key}`;
