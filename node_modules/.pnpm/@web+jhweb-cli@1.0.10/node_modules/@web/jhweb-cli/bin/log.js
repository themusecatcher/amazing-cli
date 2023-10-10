const chalk = require("chalk");
module.exports.log = (msg, color='green', ...arg) => console.log(chalk[color](msg, arg));
