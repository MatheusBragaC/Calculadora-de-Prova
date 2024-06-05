function registrarAluno(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const notaum = parseFloat(document.getElementById('notaum').value);
    const notadois = parseFloat(document.getElementById('notadois').value);
    const media = (notaum + notadois) / 2;
    const decisao = media >= 5 ? "Aprovado" : "Reprovado";
    const linha = criarLinhaTabela(nome, matricula, notaum, notadois, media, decisao);
    adicionarLinhaTabela(linha);
    limparCamposFormulario();
}

function criarLinhaTabela(nome, matricula, notaum, notadois, media, decisao) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${notaum}</td>
        <td>${notadois}</td>
        <td>${media.toFixed(2)}</td>
        <td>${decisao}</td>
    `;
    return linha;
}

function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('notaum').value = '';
    document.getElementById('notadois').value = '';
}

function limparTabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}

document.getElementById('formulario').addEventListener('submit', registrarAluno);
document.getElementById('limparTabela').addEventListener('click', limparTabela);
