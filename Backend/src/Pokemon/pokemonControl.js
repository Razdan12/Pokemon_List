const express = require("express");
const multer = require("multer");
const readXlsxFile = require("read-excel-file/node");
const upload = multer({ dest: "uploads/" });
const { auth } = require("../Config/Auth");
const { uploadPokemonSer, GetData, GetAllPokemon, GetpokemonById } = require("./PokemonSer");
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  const rows = await readXlsxFile(req.file.path);
  const pokemonRes = await uploadPokemonSer(rows);
  res
    .status(200)
    .json({ message: "Kandidat uploaded successfully", pokemonRes });
});

router.get("/data", auth, async (req, res) => {
  const response = await GetData()
  res
  .status(200)
  .json(response);
  
})
router.get("/all",auth, async (req, res) => {
  const response = await GetAllPokemon()
  res
  .status(200)
  .json(response);
  
})
router.get("/id/:id", auth, async (req, res) => {
  const id = req.params.id
  const response = await GetpokemonById(id)
  res
  .status(200)
  .json(response);
  
})

module.exports = router;
