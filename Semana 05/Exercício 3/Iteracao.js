const prompt = require('prompt-sync')();

// Criando um array vazio para armazenar os números
const numeros = [];

// Recebendo os 5 números do usuário
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
}

// Imprimindo os números no console
console.log("Números digitados:");
for (const numero of numeros) {
    console.log(numero);
}
