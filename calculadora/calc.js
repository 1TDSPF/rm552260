
//CRIANDO UMA FUNÇÃO PARA RECEBER O BOTÃO
function insereNumero(botao,visor) {
    
    visor.value += botao.value;

}

function resultado(visor){

    console.log(visor.value)
    let novoVisor = visor.value.split("+")

    let resultadoOperacao = 0

    novoVisor.forEach((nr) => {
        resultadoOperacao += parseInt(nr);
    });

    console.log(resultadoOperacao);
}