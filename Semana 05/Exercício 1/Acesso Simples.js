// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Recebendo as três frutas do usuário
const fruta1 = prompt('Digite a primeira fruta: ');
const fruta2 = prompt('Digite a segunda fruta: ');
const fruta3 = prompt('Digite a terceira fruta: ');

// Criando o array com as frutas
const frutas = [fruta1, fruta2, fruta3];

// Exibindo a segunda fruta (índice 1) no console
console.log('A segunda fruta é:', frutas[1]);
