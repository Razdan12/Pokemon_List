const jwt = require("jsonwebtoken");
const express = require("express");
const { registerUser, loginUser } = require("./userService");
const { auth } = require("../Config/Auth");
const { getUserById } = require("./userRepo");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerUser(name, email, password);
    res.status(user.status).json({ data: user.data, message: user.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(user.status).json(user.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/me", auth, async (req, res) => {
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
    const id = decodedToken.userId;
    if (exp > date) {
      const user = await getUserById(id);
      const dataRest = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      res.status(200).json(dataRest);
    } else {
      res.status(401).json({ error: "Token Expired" });
    }
    return;
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});
module.exports = router;
