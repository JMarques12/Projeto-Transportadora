const con = require('../connection/mysql');

//CRUD - CREATE
const addfuncionario = (req, res) => {
    if(req.body!=null && req.body.nome!=null && req.body.cargo!=null &&  req.body.salario!=null){
        const { nome, cargo, salario } = req.body;
        con.query('INSERT INTO funcionario (nome, cargo, salario) VALUES (?, ?, ?)', [nome, cargo, salario], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao adicionar funcionario');
            }
            res.status(201).send('funcionario adicionado com sucesso');
        });
    } else {
        res.status(500).send('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getfuncionario = (req, res) => {
    if (req.params.cargo != null) {
        con.query(`SELECT * FROM funcionario WHERE func = '${req.params.cargo}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionario');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM funcionario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionario');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updatefuncionario = (req, res) => {
    if (req.body != null && req.body.nome != null && cargo != null && req.body.salario != null) {
        const { nome, cargo, salario } = req.body;
        con.query('UPDATE funcionario SET nome = ?, cargo = ?,  WHERE salario = ?', [nome, cargo, salario], (err, result) => {
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
const deletefuncionario = (req, res) => {
    if (req.params.cargo!= null) {
        con.query(`DELETE FROM fucionario WHERE func = '${req.params.cargo}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('funcionario não encontrado');
                } else {
                    res.status(200).json('funcionario deletado com sucesso');
                }
            }
        });
    } 
}
module.exports = {
    addfuncionario,
    getfuncionario,
    updatefuncionario,
    deletefuncionario
}