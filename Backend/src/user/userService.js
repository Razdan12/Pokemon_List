const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByEmail, createUser } = require("./userRepo");
const { Response } = require("../Config/Response");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.SECRET_KEY_JWT;

const registerUser = async (name, email, password) => {
  const cekEmailUser = await getUserByEmail(email);
  if (cekEmailUser) {
    return Response(400, "", "email sudah digunakan");
  } else {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const userData = {
        name,
        email,
        password: hashPassword,
      };
      const user = await createUser(userData);
      return Response(200, { name: user.name, email: user.email }, "sukses");
    } catch (error) {
      throw error;
    }
  }
};

const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({userId: user.id, email: user.email}, secretKey, {expiresIn: "6h"})
  const dataUser = {
    id: user.id,
    nama: user.name,
    email: user.email,
    token: token
  }
  return Response(200, dataUser, "sukses login")
};

module.exports = { registerUser, loginUser };
