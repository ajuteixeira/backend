function cadastrar() {
    fetch('http://localhost:8000/disciplinas', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            carga_horaria: document.getElementById('carga_horaria').value
        })
    })
        .then()
        .then();
}