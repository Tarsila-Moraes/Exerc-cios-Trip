// Cria um objeto para armazenar as quantidades de cada produto
const produtos = {
    Hortifruti: 0,
    Laticínios: 0,
    Carnes: 0,
    Peixes: 0,
    Aves: 0,
  };
  
  // Função para exibir o menu e obter a escolha do cliente
  function exibirMenu() {
    console.log("Escolha o produto:");
    console.log("(1) Hortifruti");
    console.log("(2) Laticínios");
    console.log("(3) Carnes");
    console.log("(4) Peixes");
    console.log("(5) Aves");
    console.log("(6) Fechar pedido");
  
    const escolha = prompt("Digite o número correspondente ao produto desejado:");
  
    // Verifica a escolha do cliente
    switch (escolha) {
      case "1":
        adicionarProduto("Hortifruti");
        break;
      case "2":
        adicionarProduto("Laticínios");
        break;
      case "3":
        adicionarProduto("Carnes");
        break;
      case "4":
        adicionarProduto("Peixes");
        break;
      case "5":
        adicionarProduto("Aves");
        break;
      case "6":
        finalizarPedido();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenu();
    }
  }
  
  // Função para adicionar a quantidade de um produto
  function adicionarProduto(produto) {
    const quantidade = parseInt(prompt(`Digite a quantidade de ${produto}:`));
    produtos[produto] += quantidade;
    exibirMenu();
  }
  
  // Função para finalizar o pedido e exibir o produto com maior quantidade
  function finalizarPedido() {
    let maiorQuantidade = 0;
    let produtoMaiorQuantidade = "";
  
    for (const produto in produtos) {
      if (produtos[produto] > maiorQuantidade) {
        maiorQuantidade = produtos[produto];
        produtoMaiorQuantidade = produto;
      }
    }
  
    console.log(`Produto com maior quantidade: ${produtoMaiorQuantidade} (${maiorQuantidade} unidades).`);
  }
  
  // Inicia a aplicação
  exibirMenu();
  