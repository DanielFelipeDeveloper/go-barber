import express from 'express';
import routes from './routes';

import './database';

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
    this.server.use(routes);
  }
}
export default new App().server;
