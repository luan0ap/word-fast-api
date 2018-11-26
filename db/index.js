
const { resolve } = require('path')
const { getJSON } = require('../utils')

const FILE = resolve(__dirname, 'words.json')

module.exports = getJSON(FILE)
