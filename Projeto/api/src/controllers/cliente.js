const con = require('../connection/mysql');

const addcliente = (req, res) => {
    let {nome, endereco, telefone, email} = req.body;
    
    let query = `INSERT INTO cliente (nome, endereco, telefone, email) VALUE ('${nome}', '${endereco}', '${telefone}', '${email}')`;
    con.query(query, (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const getcliente = (req, res) => {
    con.query('SELECT * FROM cliente', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const updatecliente = (req, res) => {
    const {id} = req.params;
    const {nome, endereco, telefone, email} = req.body;

    con.query('UPDATE cliente SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE idCliente = ?', [nome, endereco, telefone, email, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

const  deletecliente = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM cliente WHERE idCliente = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
}

module.exports = {
    addcliente,
    getcliente,
    updatecliente,
    deletecliente
}