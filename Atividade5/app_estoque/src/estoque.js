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
    produtos = produtos.filter(produto => produto.id !== id);
}


module.exports = {
    criarProduto,
    adicionarProdutos,
    listaProdutos,
    removerProdutos
}