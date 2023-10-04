const express = require('express');

// criando um direcionador para definir o que cada endpoint faz
const router = express.Router();

router.get('/cursos', (req, res) => {
    res.send(['JavaScript', 'Java', 'C++']);
});

router.get('/cursos/:id', (req, res) => {
    res.send({
        id: req.params.id,
        nome: "Java",
        horas: "120h",
    })
})

router.post('/cursos', (req, res) => {
    res.send({
        msg: "Pronto, cadastrar"
    });
});

router.patch('/cursos/:id', (req, res) => {
    res.send({
        msg: "Pronto, editar"
    });
});

router.delete('/cursos/:id', (req, res) => {
    res.send({
        msg: "Pronto, excluir"
    });
});

module.exports = router;