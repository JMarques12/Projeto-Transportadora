const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const funcionario = require('./controllers/funcionario');
const veiculos = require('./controllers/veiculo');

routes.get('/', (req, res) => {
    res.json("API Transportadora")
});

routes.get('/clientes', Cliente.getClientes);
routes.get('/funcionario', funcionario.getfuncionario);
module.exports = routes;