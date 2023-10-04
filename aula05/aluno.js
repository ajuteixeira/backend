const express = require('express');

// criando um direcionador para definir o que cada endpoint faz
const router = express.Router();

router.get('/alunos', (req, res) => {
    // SELECT * FROM tb_aluno;

    res.send(['Maria', 'Jose', 'Rita']);
});

router.get('/alunos/:id', (req, res) => {
    // SELECT * FROM tb_aluno WHERE id = req.params.id;

    res.send({
        id: req.params.id,
        nome: "Chiquim",
        cidade: "Caucaia",
    })
})

router.post('/alunos', (req, res) => {
    res.send({
        msg: "Pronto, cadastrar"
    });
});

router.patch('/alunos/:id', (req, res) => {
    res.send({
        msg: "Pronto, editar"
    });
});

router.delete('/alunos/:id', (req, res) => {
    res.send({
        msg: "Pronto, excluir"
    });
});

module.exports = router;