function verificarPar(numero) {
    return new Promise((resolve, reject) => {
      if (typeof numero !== 'number') {
        reject(new Error("Error: Valor informado não é um número"));
      } else if (numero % 2 === 0) {
        resolve("Número validado é par");
      } else {
        reject(new Error("Error: número informado é ímpar"));
      }
    });
  }
  
  const numeroPar = 6;
  const numeroImpar = 7;
  const valorNaoNumerico = `a`;
  
  verificarPar(numeroPar)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.error(erro.message);
    });
  
  verificarPar(numeroImpar)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.error(erro.message);
    });
  
  verificarPar(valorNaoNumerico)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.error(erro.message);
    });
  