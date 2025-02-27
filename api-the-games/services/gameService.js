import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games =>{
  // sucesso
  // }).catch(error) {
  //    falha
  // }

  // async assincrona deixe o código continuar enquanto espera a promessa  / await (usar quando necessário esperar para continuar o código) espere trazer a promessa para continuar
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService;