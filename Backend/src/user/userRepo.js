const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (userData) => {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
    try {
        const userByEmail = await prisma.user.findUnique({
            where: {email: email}
        })
        return userByEmail
    } catch (error) {
        throw error;
    }
}

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {id: id}
  })
}

module.exports = { createUser, getUserByEmail, getUserById}