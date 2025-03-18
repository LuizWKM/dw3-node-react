import mongoose from "mongoose";

// Documento aninhado
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rate: String,
})

const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema] // Array de objetos,
});

// Aqui está sendo criado a coleção games no banco de dados
const Game = mongoose.model("Games", gameSchema);

export default Game;
