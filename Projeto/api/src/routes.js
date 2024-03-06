const express = require('express');

const cliente = require('.controllers/cliente');

routes.get('/', (req ,res) =>(
    res.json("API Transportadora")
));

routes.get('/clientes', Cliente.getClientes);