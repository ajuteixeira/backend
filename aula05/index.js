const express = require('express'); // importar o express
const alunoRouter = require('./aluno');
const cursoRouter = require('./curso');


const app = express(); // iniciar o express

app.use(alunoRouter);
app.use(cursoRouter);

app.listen(8000); // acessar