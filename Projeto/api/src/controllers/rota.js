const con = require('../connection/mysql');

//CRUD - CREATE
const addrota = (req, res) => {
    if(req.body!=null && req.body.idrota!=null && req.body.origem!=null &&  req.body.pedido!=null!=null &&  req.body.distancia){
        const { idrota, origem, pedido, distancia } = req.body;
        con.query('INSERT INTO rota (idrota, origem, pedido, distancia) VALUES (?, ?,?,?)', [idrota, origem, pedido, distancia], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao adicionar rota');
            }
            res.status(201).send('rota adicionada com sucesso');
        });
    } else {
        res.status(500).send('Favor enviar todos os campos obrigatórios');
    }
}
//CRUD - READ
const getrota = (req, res) => {
    if (req.params.origem != null) {
        con.query(`SELECT * FROM rota WHERE func = '${req.params.origem}'`, (err, result) => {
            if (err) {
                res.status(500).json(err).end();
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM rota', (err, result) => {
            if (err) {
                // res.status(500).send('Erro ao listar rota');
                res.status(500).json(err).end();
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updaterota = (req, res) => {
    if(req.body!=null && req.body.idrota!=null && req.body.origem!=null &&  req.body.pedido!=null!=null &&  req.body.distancia){
        const { idrota, origem, pedido, distancia } = req.body;
        con.query('UPDATE pedidos SET idrota = ?, origem = ?, pedido = ?,  WHERE distancia = ?', [idrota, origem, pedido, distancia], (err, result) => {
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
const deleterota = (req, res) => {
    if (req.params.origem!= null) {
        con.query(`DELETE FROM rota WHERE func = '${req.params.origem}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('rota não encontrada');
                } else {
                    res.status(200).json('rota deletada com sucesso');
                }
            }
        });
    } 
}
module.exports = {
    addrota,
    getrota,
    updaterota,
    deleterota
}