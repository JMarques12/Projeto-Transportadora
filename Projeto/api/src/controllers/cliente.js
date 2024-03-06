const con = require('..;/connection/mysql');

//crud - read
const getclientes = (req, res) => {
    con.query('SELECT * FROM cliente'), (err, rows) => {
        if (err) {
            res.status(500).send('erro ao listar clientes');
        }
        res.json(result);
}};


module.exports = {

}