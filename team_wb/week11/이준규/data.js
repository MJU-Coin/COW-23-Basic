const fs = require('fs');

const jsonFile = fs.readFileSync('../data/db.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

console.log(jsonData);