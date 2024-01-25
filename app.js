function exibirTexto(tagIn, tagOut, texto) {
    document.getElementById(tagIn).value;
    document.getElementById(tagOut).value = texto
}

function decodificar() {
    let decoWord = document.getElementById('input__area').value;
    let decoNewWord = "";

    for (let i = 0; i < decoWord.length; i++) {
        if (decoWord[i] === 'e') {
            decoNewWord += 'enter';
        } else if (decoWord[i] === 'i') {
            decoNewWord += 'imes';
        } else if (decoWord[i] === 'a') {
            decoNewWord += 'ai';
        } else if (decoWord[i] === 'o') {
            decoNewWord += 'ober';
        } else if (decoWord[i] === 'u') {
            decoNewWord += 'ufat';
        } else {
            decoNewWord += decoWord[i];
        }
    }

    exibirTexto('input__area', 'return__area', decoNewWord);
}

function desfazer() {
    let desWord = document.getElementById('return__area').value;
    let desNewWord = "";

    for (let i = 0; i < desWord.length; i++) {
        if (desWord.substring(i, i + 5) === 'enter') {
            desNewWord += 'e';
            i += 4; // Avança o índice para o final da substring correspondente
        } else if (desWord.substring(i, i + 4) === 'imes') {
            desNewWord += 'i';
            i += 3;
        } else if (desWord.substring(i, i + 2) === 'ai') {
            desNewWord += 'a';
            i += 1;
        } else if (desWord.substring(i, i + 4) === 'ober') {
            desNewWord += 'o';
            i += 3;
        } else if (desWord.substring(i, i + 4) === 'ufat') {
            desNewWord += 'u';
            i += 3;
        } else {
            desNewWord += desWord[i];
        }
    }

    exibirTexto('return__area', 'input__area', desNewWord);
}

function copy() {
    let copyText = document.querySelector("#return__area");
    copyText.select();
    
    try {
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência!");
    } catch (err) {
        console.error("Erro ao copiar o texto:", err);
    }
}
document.querySelector("#copy").addEventListener("click", copy);
