const fs = require('fs')

const getJSON = path => JSON.parse(fs.readFileSync(path), 'utf-8')

module.exports = getJSON
