const con = require('../connection/mysql');

//CRUD - CREATE
const addpedido = (req, res) => {
    if(req.body!=null && req.body.idpedido!=null && req.body.idcliente!=null &&  req.body.identrega!=null!=null &&  req.body.datapedido!=null &&  req.body.valor){
        const { idpedido, idcliente, identrega, datapedido, valor } = req.body;
        con.query('INSERT INTO pedidos (idpedido, idcliente, identrega, datapedido, valor) VALUES (?, ?,?,?,?)', [nidpedido, idcliente, identrega, datapedido, valor], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao adicionar pedido');
            }
            res.status(201).send('pedido adicionado com sucesso');
        });
    } else {
        res.status(500).send('Favor enviar todos os campos obrigatórios');
    }
}
//CRUD - READ
const getpedido = (req, res) => {
    if (req.params.idcliente != null) {
        con.query(`SELECT * FROM pedidos WHERE func = '${req.params.idcliente}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar pedido');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM pedidos', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar pedido');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updatepedido = (req, res) => {
    if(req.body!=null && req.body.idpedido!=null && req.body.idcliente!=null &&  req.body.identrega!=null!=null &&  req.body.datapedido!=null &&  req.body.valor){
        const { idpedido, idcliente, identrega, datapedido, valor } = req.body;
        con.query('UPDATE pedidos SET idpedido = ?, idcliente = ?,identrega = ?,datapedido = ?,  WHERE valor = ?', [idpedido, idcliente, identrega, datapedido, valor], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deletepedido = (req, res) => {
    if (req.params.idcliente!= null) {
        con.query(`DELETE FROM pedidos WHERE func = '${req.params.idcliente}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('pedido não encontrado');
                } else {
                    res.status(200).json('pedido deletado com sucesso');
                }
            }
        });
    } 
}
module.exports = {
    addpedido,
    getpedido,
    updatepedido,
    deletepedido
}