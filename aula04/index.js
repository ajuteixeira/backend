const http = require('http');
const db = require('./conexao')

async function recepcao(req, res) {
    if (req.url === '/alunos') {
        let dados = await db.executar(); // SELECT * FROM tb_alunos;
        res.end(JSON.stringify(dados));
        return;
    }

    if (req.url === '/labs') {
        let dados = await db.executar();
        res.end(JSON.stringfy(dados));
        return;
    }

    res.end('API ta ON');
}

http.createServer(recepcao).listen(8000);

// http.createServer((req, res) => {
//     res.end('API tá ON');
// }).listen(8000);