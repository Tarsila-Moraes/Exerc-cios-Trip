let contador = 0;
let avaliacoesRuins = 0;

while (contador < 4) {
  const nota = prompt("Qual a sua avaliação para a série 'Stranger Things'? (ruim, bom ou excelente)");
  
  if (nota === "ruim") {
    avaliacoesRuins++;
  }
  
  contador++;
}

console.log(`Número de avaliações ruins: ${avaliacoesRuins}`);
