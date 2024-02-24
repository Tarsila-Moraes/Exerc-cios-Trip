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

// Supondo que o array 'numeros' já esteja preenchido com os números digitados pelo usuário
const somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(`A soma de todos os números é: ${somaTotal}`);

// Supondo que o array 'numeros' já esteja preenchido com os números digitados pelo usuário
const numerosOrdenados = [...numeros]; // Cria uma cópia do array 'numeros'

// Ordena o novo array em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprime o array ordenado no console
console.log("Números ordenados em ordem crescente:");
console.log(numerosOrdenados);


