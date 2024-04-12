const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    // console.log(req.body)
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }

    if (token) {
      try {
        const { data } = jwt.verify(token, secret, { expiresIn: expiration });
        return { ...req, user:data};
      } catch {
        throw new AuthenticationError("Invalid token!");
      }
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
