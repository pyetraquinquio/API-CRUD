const Produto = require('../models/produto');


// Controlador para obter todos os Produtos
exports.getAllProdutos = (req, res) => {
Produto.getAllProdutos((err, produtos) => {
if (err) {
res.status(500).send(err);
} else {
res.json(produtos);
}
});
};


// Controlador para obter um Produto pelo ID
exports.getProdutoById = (req, res) => {
Produto.getProdutoById(req.params.id, (err, produto) => {
if (err) {
res.status(500).send(err);
} else if (produto) {
res.json(produto);
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}
});
};


// Controlador para criar um novo Produto
exports.createProduto = (req, res) => {
Produto.createProduto(req.body, (err, result) => {
if (err) {
res.status(500).send(err);
} else {
res.status(201).json(result);
}
});
};


// Controlador para atualizar um Produto existente
exports.updateProduto = (req, res) => {
Produto.updateProduto(req.params.id, req.body, (err, result) => {
if (err) {
res.status(500).send(err);
} else if (result.changes) {
res.status(200).json(result);
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}

});
};


// Controlador para deletar um Produto
exports.deleteProduto = (req, res) => {
Produto.deleteProduto(req.params.id, (err, result) => {
if (err) {
res.status(500).send(err);
} else if (result.changes) {
res.status(200).json({ message: 'Produto deletado com sucesso' });
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}})
};