let produtos = []

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p
}

function adicionarProdutos(p){
    produtos.push(p)
}

function listaProdutos(){
    return produtos
}

function removerProdutos(id){
    produtos.filter(id)
    produtos.pop(id)
}

module.exports = {
    criarProduto,
    adicionarProdutos,
    listaProdutos
}