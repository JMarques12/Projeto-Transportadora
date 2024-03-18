const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const funcionario = require('./controllers/funcionario');
const veiculos = require('./controllers/veiculo');
const entrega = require('./controllers/entrega');

routes.get('/', (req, res) => {
    res.json("API Transportadora")
});

routes.get('/clientes', Cliente.getClientes);
routes.get('/funcionario', funcionario.getfuncionario);
routes.get('/entrega', entrega.getentrega);
routes.get('/pedido', pedido.getpedido);
routes.get('/rota', rota.getrota);
module.exports = routes;