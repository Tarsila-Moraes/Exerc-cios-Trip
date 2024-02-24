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

//INICIO EXERCICIO 05

// Supondo que o array 'numeros' já esteja preenchido com os números digitados pelo usuário
const numerosOrdenados = [...numeros]; // Cria uma cópia do array 'numeros'

// Ordena o novo array em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprime o array ordenado no console
console.log("Números ordenados em ordem crescente:");
console.log(numerosOrdenados);

//FIM EXERCICIO 05

//INICIO EXERCICIO 06

// Supondo que o array 'numeros' já esteja preenchido com os números digitados pelo usuário
const pares = numeros.filter(numero => numero % 2 === 0);

console.log("Números pares:");
console.log(pares);
//FIM EXERCICIO 06

// INICIO EXERCICIO 7

// Supondo que o array 'numeros' já esteja preenchido com os números digitados pelo usuário
const quadrados = numeros.map(numero => numero ** 2);

console.log("Números ao quadrado:");
console.log(quadrados);

// FIM EXERCICIO 7
