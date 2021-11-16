const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)

module.exports = router