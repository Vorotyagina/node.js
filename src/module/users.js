const fs = require("fs");
const path = require('path');

function showUsers() {
  const filePath = path.join(__dirname, '/../data/users.json');
  return fs.readFileSync (`${__dirname}/../data/users.json`);
}

module.exports = showUsers;