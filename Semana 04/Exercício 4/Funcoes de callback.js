function adicao (num1, num2, funcaoAnonima) {
    let soma = num1 + num2;

    funcaoAnonima(soma)
}
    
let imprimirResultado = function (soma) {
    console.log("O resultado final é "+ soma)
}

const numero1 = 10;
const numero2 = 20;

adicao(numero1, numero2, imprimirResultado);


