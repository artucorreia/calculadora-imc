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
    if (n == '' || a < 100 || p < 20 || p >= 700) {
        liberdado = false;
    } else {
        liberdado = true;
    }
}

// calculo imc
let imc = (a, p) => p / (a/100)**2;

// classificao
let classificao = (i) => {
    if (i < 18.5) {
        return 'abaixo do peso.';
    } else if (i < 25){
        return 'com o peso ideal.';
    } else if (i < 30) {
        return 'levemente acima do peso.';
    } else if (i < 35) {
        return 'com obesidade grau I.';
    } else if (i < 40) {
        return 'com obesidade grau II.';
    } else {
        return 'com obesidade grau III. Cuidado!'
    }
}

// mensagem
let retorno = window.document.getElementById('retorno');
function msg(n, i, c) {
    if (liberdado) {
        retorno.innerHTML = `<em>${n} seu IMC é ${i.toFixed(1)} e você está ${c}</em>`;
    } else {
        window.alert('Verifique os dados e tente novamente. OBS: altura(Cm), peso(Kg)');
    }
}