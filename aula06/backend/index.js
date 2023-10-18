const express = require('express');
const cors = require('cors');
const disciplinaRouter = require('./routes/disciplina');

const app = express();

//habilitar o uso de JSON nesa API
app.use(express.json());

//liberar o acesso a servidores externos
app.use(cors());

//add as rotas da disciplina
app.use(disciplinaRouter);

//subir o servidor
app.listen(8000);

//npx nodemon index.js
//http://localhost:8000/disciplinas