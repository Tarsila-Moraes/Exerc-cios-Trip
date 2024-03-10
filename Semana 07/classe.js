class Produto{
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

Vender(quantidadeVendida) {
    if (quantidadeVendida <= this.quantidade) {
        this.quantidade -= quantidadeVendida;
        console.log(`Venda realizada com sucesso. Nova quantidade: ${this.quantidade}`);
    } else {
        console.log('Estoque insuficiente. Venda não realizada.')
    }
}


Repor(quantidadeResposta) {
    this.quantidade += quantidadeReposta;
    console.log(`Reposição realizada com sucesso. Nova quantidade: ${this.quantidade}`);
}

MostrarEstoque() {
    console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis.`)
}

AtualizarPreco(novoPreco) {
    this.preco = novoPreco;
    console.log(`Preço atualizado com sucesso. Novo preço: R$ ${this.preco.toFixed(2)}`)
}
}

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

class Cliente extends Pessoa {
    constructor(nome, idade, prodfissao, telefone, email, clienteDesde) {
        super(nome idade, profissao);
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}

cont clienteTarsi = new Cliente("Tarsi", 36, "Analista", "4899999999", "tarsilamoraes@gmail.com", "1987-09-01" )
console.log(clienteTarsi)


const melancia = new Produto ("Melancia", 3, 10);
melancia.Vender(4)
melancia.Repor(5)
melancia.Vender(20)
melancia.MostrarEstoque()
melancia.AtualizarPreco(4.5)