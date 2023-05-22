const jwt = require("jsonwebtoken");

const JWT = {
  generate(data, time) {
    return jwt.sign(data, "LQC", { expiresIn: time });
  },
  verify(token) {
    try {
      return jwt.verify(token, "LQC");
    } catch (error) {
      return false;
    }
  },
};

module.exports = JWT;
