// atribuir valores
let btn = window.document.getElementById('btn');
btn.addEventListener('click', () => {
    let nometxt = window.document.getElementById('nome');
    let nome = nometxt.value;
    let alturatxt = window.document.getElementById('altura');
    let altura = Number(alturatxt.value);
    let pesotxt = window.document.getElementById('peso');
    let peso = Number(pesotxt.value);
    validacao(nome, altura, peso);
    msg(nome, imc(altura, peso), classificao(imc(altura, peso)));
})

// validacao
let liberdado = false;
function validacao(n, a, p) {
    if ((n == '') || (a <= 0) || (p <= 0)) {
        liberdado = false;
    } else {
        liberdado = true;
    }

}

// calculo imc
let imc = (a, p) => p / a**2;

// classificao
let classificao = (i) => {
    if (i < 18.5) {
        return 'está abaixo do peso';
    } else if (i < 24.9){
        return 'está no peso ideal';
    } else {
        return 'está acima do peso';
    }
}

// mensagem
let retorno = window.document.getElementById('retorno');
function msg(n, i, c) {
    if (liberdado) {
        retorno.innerHTML = `<em>${n} seu IMC é ${i.toFixed(1)} e você ${c}</em>`;
    } else {
        window.alert('Verifique os dados e tente novamente');
    }
}