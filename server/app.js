const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");

const app = express();
const DB_USER = "tbivash3";
const PASSWORD = encodeURIComponent("Evens@345");

mongoose.connect(
  `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.rb8p1.mongodb.net/GraphQLDB?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, (req, res) => {
  console.log("now listening on port 4000 ...");
});
