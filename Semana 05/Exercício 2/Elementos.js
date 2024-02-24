// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Recebendo as três frutas do usuário
const fruta1 = prompt('Digite a primeira fruta: ');
const fruta2 = prompt('Digite a segunda fruta: ');
const fruta3 = prompt('Digite a terceira fruta: ');

// Criando o array com as frutas
const frutas = [fruta1, fruta2, fruta3];

// Adicionando mais uma fruta ao array
const fruta4 = prompt('Digite mais uma fruta: ');
frutas.push(fruta4);

// Removendo a primeira fruta do array
frutas.shift();

// Exibindo o array atualizado no console
console.log('Array atualizado:', frutas);
