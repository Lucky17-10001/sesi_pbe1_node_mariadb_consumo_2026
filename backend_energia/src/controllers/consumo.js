const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, local, equipamento, consumoKwh, mesReferencia, status } = req.body

    const sql = `INSERT INTO consumo
    (usuarioId, local, equipamento, consumoKwh, mesReferencia, status)
    VALUES (?, ?, ?, ?, ?, ?)`

    con.query(sql, [usuarioId, local, equipamento, consumoKwh, mesReferencia, status], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao cadastrar consumo' })
        }

        res.status(201).json({
            mensagem: 'Consumo cadastrado com sucesso!',
            id: result.insertId
        })
    })
}

const listar = (req, res) => {
    const sql = 'SELECT * FROM consumo'

    con.query(sql, (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao listar consumos' })
        }

        res.status(200).json(result)
    })
}

const buscarPorId = (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * FROM consumo WHERE id = ?'

    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao buscar consumo' })
        }

        if (result.length === 0) {
            return res.status(404).json({ mensagem: 'Consumo não encontrado' })
        }

        res.status(200).json(result[0])
    })
}

const atualizar = (req, res) => {
    const { id } = req.params
    const { usuarioId, local, equipamento, consumoKwh, mesReferencia, status } = req.body

    const sql = `UPDATE consumo SET
    usuarioId = ?, local = ?, equipamento = ?, consumoKwh = ?,
    mesReferencia = ?, status = ?
    WHERE id = ?`

    con.query(sql, [usuarioId, local, equipamento, consumoKwh, mesReferencia, status, id], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao atualizar consumo' })
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Consumo não encontrado' })
        }

        res.status(200).json({ mensagem: 'Consumo atualizado com sucesso!' })
    })
}

const excluir = (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM consumo WHERE id = ?'

    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao excluir consumo' })
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Consumo não encontrado' })
        }

        res.status(200).json({ mensagem: 'Consumo excluído com sucesso!' })
    })
}

const mediaConsumo = (req, res) => {
    const sql = 'SELECT AVG(consumoKwh) AS media FROM consumo'

    con.query(sql, (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ erro: 'Erro ao calcular média de consumo' })
        }

        res.status(200).json({
            mediaKwh: Number(result[0].media || 0)
        })
    })
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    mediaConsumo
}