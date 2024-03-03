// Função para buscar o arquivo JSON
async function buscarDados() {
    try {
      const response = await fetch('data.json'); 
      const dados = await response.json(); // Converte a resposta para um objeto JavaScript
  
      // Exibe os dados na página HTML 
      const container = document.getElementById('dados-container');
      container.innerHTML = `
        <p>Nome: ${dados.nome}</p>
        <p>Idade: ${dados.idade}</p>
        <p>Email: ${dados.email}</p>
      `;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
  
  // Chama a função para buscar os dados
  buscarDados();
  