const app = require('express')()
const graphHTTP = require('express-graphql')
const { schema, rootValue } = require('./schema')
const cors = require('cors')

app.use(cors)

app.use('/graphql', graphHTTP({ schema, rootValue }))
app.listen(4000)

console.log('Server runing...')