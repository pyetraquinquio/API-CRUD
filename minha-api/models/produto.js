const sqlite3 = require('sqlite3').verbose();
const dbPath = './infra/database.db';


// Função para abrir conexão com o banco de dados
function openDbConnection() {
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
if (err) {
console.error('Erro ao abrir o banco de dados:', err.message);
}
});
return db;
}


// Função para buscar todos os Produtos
function getAllProdutos(callback) {
const db = openDbConnection();
db.all("SELECT * FROM Produtos", [], (err, rows) => {
db.close();
callback(err, rows);
});
}


// Função para buscar um Produto por ID
function getProdutoById(id, callback) {
const db = openDbConnection();
db.get("SELECT * FROM Produtos WHERE id = ?", [id], (err, row) => {
db.close();
callback(err, row);
});
}


// Função para criar um novo Produto
function createProduto(produto, callback) {
const { nomep, peso, preço } = produto;
const db = openDbConnection();
db.run("INSERT INTO Produtos (nomep, peso, preço) VALUES (?, ?, ?)", [nomep,
peso, preço], function (err) {
db.close();
callback(err, { id: this.lastID });
});
}


// Função para atualizar um Produto existente
function updateProduto(id, produto, callback) {
const { nomep, peso, preço} = produto;
const db = openDbConnection();
db.run("UPDATE Produtos SET nomep = ?, peso = ?, preço = ? WHERE id = ?",
[nomep, peso, preço, id], function (err) {
db.close();
callback(err, { changes: this.changes });
});
}
// Função para deletar um Produto
function deleteProduto(id, callback) {
const db = openDbConnection();
db.run("DELETE FROM Produtos WHERE id = ?", [id], function (err) {
db.close();
callback(err, { changes: this.changes });
});
}
module.exports = {
getAllProdutos,
getProdutoById,
createProduto,
updateProduto,
deleteProduto
};