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

function editarProdutos(id, nomeNovo, qtdNova){
    for (let i = 0; i < produtos.length; i++){
        if(produtos[i].id === id){
            produtos[i] = {
                id: id,
                nome: nomeNovo,
                qtd: qtdNova
            }
            return produtos[i]
        }
    }
    return null
}

module.exports = {
    criarProduto,
    adicionarProdutos,
    listaProdutos,
    removerProdutos,
    editarProdutos
}