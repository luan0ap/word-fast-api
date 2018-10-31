const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql')

module.exports = buildASTSchema(gql`
  type Query {
    words: [String]
  }
`)
