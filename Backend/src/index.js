const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const user = require("./user/userController");
const Pokemon = require("./Pokemon/pokemonControl")

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
  credentials: true,
};
const app = express();
app.use(cors(corsOptions));

dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use("/user", user);
app.use("/pokemon", Pokemon);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server Runing on port ${port}`);
});
