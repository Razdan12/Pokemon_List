const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UploadPokemon = async (data) => {
  return prisma.pokemon.createMany({
    data: data,
  });
};

const getByGeneration = async (gen) => {
  return prisma.pokemon.count({
    where: {
      generation: gen,
    },
  });
};
const getByType = async (type) => {
  return prisma.pokemon.count({
    where: {
      type_1: type,
    },
  });
};

const getByHighScore = async () => {
  return prisma.pokemon.findMany({
    orderBy: {
      total_points: "desc",
    },
    take: 5,
  });
};

const getByHighHp = async () => {
  return prisma.pokemon.findMany({
    orderBy: {
      hp: "desc",
    },
    take: 5,
  });
};
const getAll = async () => {
  return prisma.pokemon.findMany();
};

const getById = async (id) => {
  return prisma.pokemon.findUnique({
    where: {
      id: id,
    },
  });
};

module.exports = {
  UploadPokemon,
  getByGeneration,
  getByType,
  getByHighScore,
  getAll,
  getByHighHp,
  getById,
};
