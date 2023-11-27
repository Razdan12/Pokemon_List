
const {
  UploadPokemon,
  getByGeneration,
  getAll,
  getByType,
  getByHighScore,
  getByHighHp,
  getById,
} = require("./pokemonRepo");

const uploadPokemonSer = async (item) => {
  try {
    const dataPokemon = item.slice(1).map(async (row) => {
      return {
        pokedex_number: row[1],
        name: row[2],
        img: row[3],
        german_name: row[4],
        japanese_name: row[5],
        generation: row[6],
        status: row[7],
        species: row[8],
        type_number: row[9],
        type_1: row[10],
        type_2: row[11],
        height_m: row[13],
        weight_kg: row[14],
        abilities_number: row[15],
        ability_1: row[16],
        ability_2: row[17],
        ability_hidden: row[18],
        total_points: row[19],
        hp: row[20],
        attack: row[21],
        defense: row[22],
        sp_attack: row[23],
        sp_defense: row[24],
        speed: row[25],
        catch_rate: row[26],
        base_friendship: row[27],
        base_experience: row[29],
        growth_rate: row[30],
        egg_type_number: row[31],
        egg_type_1: row[32],
        egg_type_2: row[33],
        percentage_male: row[34],
        egg_cycles: row[35],
        against_normal: row[36],
        against_fire: row[37],
        against_water: row[38],
        against_electric: row[39],
        against_grass: row[40],
        against_ice: row[41],
        against_fight: row[42],
        against_poison: row[43],
        against_ground: row[44],
        against_flying: row[45],
        against_psychic: row[46],
        against_bug: row[47],
        against_rock: row[48],
        against_ghost: row[49],
        against_dragon: row[50],
        against_dark: row[51],
        against_steel: row[52],
        against_fairy: row[43],
      };
    });

    const pokemon = await Promise.all(dataPokemon);
    
    const pokemonData = await UploadPokemon(pokemon);
    return pokemonData;
  } catch (error) {
    
    return error;
  }
};

const GetData = async () => {
  const response = await getAll();
  const Score = await getByHighScore();
  const hp = await getByHighHp();

  let generations = [];
  let types = [];

  response.forEach((item) => {
    generations.push(item.generation);
    types.push(item.type_1);
  });

  const uniqueGenerations = Array.from(new Set(generations));
  const uniqueTypes = Array.from(new Set(types));

  const gen = await Promise.all(
    uniqueGenerations.map(async (item) => {
      const getGeneration = await getByGeneration(item);
      return {
        item: item,
        count: getGeneration,
      };
    })
  );

  const type = await Promise.all(
    uniqueTypes.map(async (item) => {
      const getGeneration = await getByType(item);
      return {
        item: item,
        count: getGeneration,
      };
    })
  );

  const HighScore = await Promise.all(
    Score.map(async (item) => {
      return {
        item: item.name,
        count: item.total_points,
      };
    })
  );
  const HighHp = await Promise.all(
    hp.map(async (item) => {
      return {
        item: item.name,
        count: item.hp,
      };
    })
  );
  return {
    gen,
    type,
    HighScore,
    HighHp,
  };
};

const GetAllPokemon = async () => {
  const pokemon = await getAll()
  const data = await Promise.all(
   pokemon.map(async (item) => {
      
      return {
        id: item.id,
        name: item.name,
        nameJapan: item.japanese_name,
        nameGerman: item.german_name,
        img: item.img
      };
    })
  );
  return data

}

const GetpokemonById = async (id) => {
  if(id){

    const pokemon = await getById(id)
    const data = {
      img: pokemon.img,
      hp: pokemon.hp,
      name: pokemon.name,
      japan: pokemon.japanese_name,
      german: pokemon.german_name,
      attack: pokemon.attack,
      defense: pokemon.defense,
      sp_attack: pokemon.sp_attack,
      sp_defense: pokemon.sp_defense,
      speed: pokemon.speed,
      gen: pokemon.generation,
      species: pokemon.species
    }
    return data
  }else{
    return null
  }

}
module.exports = { uploadPokemonSer, GetData, GetAllPokemon, GetpokemonById };
