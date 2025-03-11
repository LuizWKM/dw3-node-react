import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games =>{
  // sucesso
  // }).catch(error) {
  //    falha
  // }

  // async assincrona deixe o código continuar enquanto espera a promessa  / await (usar quando necessário esperar para continuar o código) espere trazer a promessa para continuar
  // Função para listar os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        // title : title
        title,
        platform,
        year,
        price,
      });
      // Método do mongoose para cadastrar .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  // Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluido.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
