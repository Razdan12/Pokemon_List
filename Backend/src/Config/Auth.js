const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "Missing authorization header" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const exp = decodedToken.exp * 1000;
    const date = new Date();
    if (exp > date) {
      next();
    } else {
      res.status(401).json({ error: "Token Expired" });
    }
    return;
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = {auth}