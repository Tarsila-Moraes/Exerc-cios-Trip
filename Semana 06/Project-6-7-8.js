//INICIO PROJETO 8
let endereco = localStorage.getItem("endereco");
if (endereco == null) {
  pegarEndereco();
} else {
  let atualiza = prompt("Endereço já informado na base de dados, deseja atualizar? S/N");
  if (atualiza.toLowerCase() == "s") {
    pegarEndereco();
  } else {
    alert("Execução finalizada.");
  }
}
  function pegarEndereco(){
let cep = prompt("Digite seu Cep:")
//FIM DO PROJETO 8
// INÍCIO PROJETO 6
fetch(`https://viacep.com.br/ws/${cep}/json`, {method: 'GET'})
.then((retornoFetch)=>{
    return retornoFetch.json();
}).then((retornoApi)=>{
    alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`)
    // FIM DO PROJETO 6
    // INICÍO DO PROJETO 7
    let resposta= prompt("Os dados estão corretos?")

    if(resposta.toLowerCase()  == "sim"){
        localStorage.setItem("endereco", JSON.stringify(retornoApi));
    }
    // FIM DO PROJETO 7
})
}


