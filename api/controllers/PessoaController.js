const database = require('../models')

class PessoaController{
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
    
            return res.status(200).json(todasAsPessoas)
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try{
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoa)

        }catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PessoaController