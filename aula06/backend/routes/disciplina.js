const express = require('express');
const database = require('../connection/database');

const router = express.Router();

router.get('/disciplinas', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_disciplina');
    res.send(dados);
})

module.exports = router;