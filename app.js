function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('p', 'Criptografia vai sair aqui');
}

mensagemInicial()

function decodificar() {
    let word = document.getElementById('input__area').value;
    exibirTexto('p', word)
}
