/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração do back-end
 * data: 18/09/2022
 * author: Silvanei Zahn
 */
 //import * as app from './src/app';
//import app from './src/app';
const app = require('./src/app');

 const port = process.env.PORT || 3000;
 
 app.listen(port, () => {
   console.log('Aplicação sendo executada na porta:', port);
 });
 

