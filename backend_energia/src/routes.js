const express = require('express')
const router = express.Router()

const usuario = require('./controllers/usuario')
const consumo = require('./controllers/consumo')

router.post('/usuarios', usuario.cadastrar)
router.get('/usuarios', usuario.listar)
router.get('/usuarios/:id', usuario.buscarPorId)
router.put('/usuarios/:id', usuario.atualizar)
router.delete('/usuarios/:id', usuario.excluir)
router.post('/login', usuario.login)

router.post('/consumo', consumo.cadastrar)
router.get('/consumo', consumo.listar)
router.get('/consumo/media', consumo.mediaConsumo)
router.get('/consumo/:id', consumo.buscarPorId)
router.put('/consumo/:id', consumo.atualizar)
router.delete('/consumo/:id', consumo.excluir)

module.exports = router