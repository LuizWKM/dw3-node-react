// Importando o mongoose
import mongoose from "mongoose";
// Usuário  e senha do banco de dados
// Importando as chaves secretas
import dotenv from 'dotenv';
dotenv.config();

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api-thegames.u5wtmqa.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Api-thegames`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;