const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const rota = require('./controllers/rota');
const funcionario = require('./controllers/funcionario');
const veiculos = require('./controllers/veiculo');
const pedidos = require('./controllers/pedidos');
const entrega = require('./controllers/entrega');

routes.get('/', (req, res) => {
    res.json("API Transportadora")
});

routes.get('/clientes', Cliente.getcliente);
routes.post('/clientes', Cliente.addcliente);
routes.put('/clientes/:id', Cliente.updatecliente);
routes.delete('/clientes/:id', Cliente.addcliente);

routes.get('/funcionario', funcionario.getfuncionario);
routes.post('/funcionario', funcionario.addfuncionario);
routes.put('/funcionario', funcionario.getfuncionario);
routes.delete('/funcionario/:id', funcionario.getfuncionario);

routes.get('/entrega', entrega.getentrega);
routes.post('/entrega', entrega.addentrega);
routes.put('/entrega', entrega.updateentrega);
routes.delete('/entrega/:id', entrega.deleteentrega);


routes.get('/pedido', pedidos.getpedido);
routes.post('/pedido', pedidos.addpedido);
routes.put('/pedido', pedidos.updatepedido);
routes.delete('/pedido/:id', pedidos.deletepedido);


routes.get('/veiculo', veiculos.getVeiculos);
routes.post('/veiculo', veiculos.addVeiculo);
routes.put('/veiculo', veiculos.updateVeiculo);
routes.delete('/veiculo/:id', veiculos.deleteVeiculo);

routes.get('/rota', rota.getrota);
routes.post('/rota', rota.addrota);
routes.put('/rota', rota.updaterota);
routes.delete('/rota/:id', rota.deleterota);

module.exports = routes;