const express = require('express');
const database = require('../connection/database');

const router = express.Router();

router.get('/disciplinas', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_disciplina');
    res.send(dados);
});

// GET /disciplinas/3
router.get('/disciplinas/:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_disciplina WHERE id=${req.params.id}
    `);

    res.send(dados[0]);
});

router.patch('/disciplinas/:id', async (req, res) => {
    await database.execute(`
    UPDATE tb_disciplina
    SET nome='${req.body.nome}', carga_horaria='${req.body.carga_horaria}'
    WHERE id=${req.params.id}
    `);

    res.send(req.body);
});

router.post('/disciplinas', async (req, res) => {
    // INSERT INTO tb_disciplina
    let dados = await database.execute(`
    INSERT INTO tb_disciplina (nome, carga_horaria)
    VALUES ('${req.body.nome}', '${req.body.carga_horaria}');
    `)

    req.body.id = dados.insertId;

    res.status(201).send(req.body);
});

router.delete('/disciplinas/:id', async (req, res) => {
    await database.execute(`
    DELETE FROM tb_disciplina WHERE id=${req.params.id}
    `);

    res.status(204).send();
})

module.exports = router;

// req body: recupera dados do CompressionStream
// req params: recupera dados da url