const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Paramss: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos.
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  */

  /**
   * Banco de dades SQL:
   * MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server. SQL é um formato que é utilizado para se comunicar com o banco de dados.
   * NoSQL: MongoDB, CouchDB, etc... (banco não relacionais).
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



app.listen(3333);
