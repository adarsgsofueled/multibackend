const express = require("express");
const { resolvers } = require("./src/resolvers/index");
const Schema = require("./src/schema/index");
const { createHandler } = require("graphql-http/lib/use/express");
const cors=require("cors")

const app = express();
app.use(cirs())
app.use(
  "/graphql",
  
  
  createHandler({
    schema: Schema,
    rootValue: resolvers,
  })
);

const PORT =  5000 ;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
