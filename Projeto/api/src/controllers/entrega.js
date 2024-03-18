const con = require('../connection/mysql');

const addentrega = (req, res) => {
    let {veiculo_id, rota_id, motorista, status, inicio, fim} = req.body;

    con.query('INSERT INTO Entrega (veiculo_id, rota_id, motorista, status, inicio, fim) VALUES (?, ?, ?, ?, ?, ?)', [veiculo_id, rota_id, motorista, status, inicio, fim], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const getentrega= (req, res) => {
    con.query('SELECT * FROM Entrega', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const updateentrega = (req, res) => {
    const {id} = req.params;
    const {veiculo_id, rota_id, motorista, status, inicio, fim} = req.body;

    con.query('UPDATE Entrega SET veiculo_id = ?, rota_id = ?, motorista = ?, status = ?, inicio = ?, fim = ? WHERE id = ?', [veiculo_id, rota_id, motorista, status, inicio, fim, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

const deleteentrega = (req, res) => {
    const {id} = req.params;

    con.query('DELETE FROM Entrega WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
}

module.exports = {
    addentrega,
    getentrega,
    updateentrega,
    deleteentrega
}