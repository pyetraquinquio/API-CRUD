const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// lembrando que a rota raiz tem produtos, definido no app.js


// Rota para obter todos os produtos
router.get('/', produtoController.getAllProdutos);


// Rota para obter um único produto pelo ID
router.get('/:id', produtoController.getProdutoById);


// Rota para criar um novo produto
router.post('/', produtoController.createProduto);


// Rota para atualizar um produto existente
router.put('/:id', produtoController.updateProduto);


// Rota para deletar um produto
router.delete('/:id', produtoController.deleteProduto);
module.exports = router;