const { buildSchema } = require("graphql")
const {schema}=require("./schema")

console.log("schema",schema);

const Schema=schema

module.exports= buildSchema(Schema)