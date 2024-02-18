const calcAverage = (num) => {
    // Utiliza o método reduce para somar todos os elementos do array
    const soma = num.reduce((acc, num) => acc + num, 0);
  
    // Calcula a média dividindo a soma pelo comprimento do array
    const avg = soma / num.length;
  
    // Retorna a média calculada
    return avg;
  };
  
  // Exemplo de uso:
  const numerosExemplo = [30, 40, 60, 80, 10];
  const resultadoMedia = calcAverage(numerosExemplo);
  
  console.log(`A média dos números é: ${resultadoMedia}`);
  

 