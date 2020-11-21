import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    // Chamando os métodos para serem executados
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes)
  }
}
// exportando uma nova instância da classe App, exportando diretamente o server.
export default new App().server