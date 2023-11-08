function remover(id) {
    // if (false === confirm("Tem certeza?")) {
    //     return;
    // }

    // fetch(`http://localhost:8000/disciplinas/${id}`, {
    //     method: 'DELETE'
    // });

    // alert('Pronto');

    // location.href = "";
}

function editar(id) {
    //adicionando o id ao formulário de editar (campo oculto)
    document.getElementById('disciplina_id').value = id;

    fetch(`http://localhost:8000/disciplinas/${id}`)
        .then(res => res.json())
        .then(dados => {
            //preenchendo o formulário
            document.getElementById('nome').value = dados.nome;
            document.getElementById('carga_horaria').value = dados.carga_horaria;
        })
}

function atualizar() {
    let id = document.getElementById('disciplina_id').value;

    fetch(`http://localhost:8000/disciplinas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            carga_horaria: document.getElementById('carga_horaria').value
        })
    })
}

fetch('http://localhost:8000/disciplinas')
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
            document.getElementById('table_disciplinas').innerHTML += `
    <tr>
        <td>${cada.id}</td>
        <td>${cada.nome}</td>
        <td>${cada.carga_horaria}</td>
        <td>
            <button onclick="editar(${cada.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" class="btn btn-warning">Editar</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger" onclick="remover(${cada.id})">Excluir</button>
        </td>
    </tr>
    `;
        })
    });