import Avaliar from '../DAO/Avaliar.js'
import { verificarToken } from "../middleware/authorization.js"

export default class AvaliarController {
    static rotas(app) {
        app.post('/avaliar', AvaliarController.inserir)
        app.get('/avaliar', AvaliarController.listarTodos)
        app.patch('/avaliar/:id', verificarToken, AvaliarController.atualizar)
        app.delete('/avaliar/:id', verificarToken, AvaliarController.deletar)
    }

    static async inserir(req, res) {
        const { nota, mensagem } = req.body
        if (!nota || !mensagem) {
            return res.status(400).send({
                message: 'Os campos "nota" e "mensagem" são obrigatórios'
            })
        }

        const avaliacao = new Avaliar()
        avaliacao.mensagem = mensagem
        avaliacao.nota = nota
        await avaliacao.save()

        res.status(200).send({
            message: 'Obrigado pela sua avaliação!',
            data: avaliacao
        })
    }

    static async listarTodos(req, res) {
        const avaliacao = await Avaliar.findAll()
        res.status(200).send({
            message: 'Avaliações:',
            data: avaliacao
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const avaliar = await Avaliar.findByProperty('id', id)
        if (!avaliar) {
            return res.status(404).send({
                message: `A avaliação de id ${id} não existe`
            })
        }

        const { nota, mensagem} = req.body
        if (nota) {
            avaliar.nota = nota
        }
        if (mensagem) {
            avaliar.mensagem = mensagem
        }

        await avaliar.save()

        res.status(200).send({
            message: 'Avaliação alterada com sucesso!',
            data: avaliar
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const avaliar = await Avaliar.findByProperty('id', id)
        if (!avaliar) {
            return res.status(404).send({
                message: `A avaliação de id ${id} não existe`
            })
        }

        await Avaliar.delete()

        res.status(200).send({
            message: 'Avaliação apagada!'
        })
    }
}