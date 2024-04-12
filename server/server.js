const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
// const routes = require('./routes');
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// const logGraphQLRequests = (req, res, next) =>{
//   console.log(`GraphQL request received: ${req.body}`);
//   res.on('finish', () => {
//     // console.log(res);
//       console.log(`GraphQL response sent with status: ${res.statusCode}`);
//   });
//   next();
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.start().then(() => {
  server.applyMiddleware({ app, path: "/graphql" });
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logGraphQLRequests);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "../client/dist")));
}

// app.use(routes);


db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
