'use strict'

// const app = require('../app')
// const eGraph = require('express-graphql')
const { buildSchema } = require('graphql')

const testSchema = buildSchema(`
  type Query {
    message: String
  }
`)

const root = {
  message: () => 'Hello GraphQL'
}

module.exports = {testSchema, root}