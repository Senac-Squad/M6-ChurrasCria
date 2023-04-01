import Cardapio from "../DAO/Cardapio.js"
import { verificarToken } from "../middleware/authorization.js"

export default class CardapioController {
    static rotas(app) {
        app.post('/cardapio', CardapioController.inserir)
        app.get('/cardapio', CardapioController.listarTodos)
        app.patch('/cardapio/:id', CardapioController.atualizar)
        app.delete('/cardapio/:id', CardapioController.deletar)
    }

    static async inserir(req, res) {
        const { descricao, preco, imagem } = req.body
        if (!descricao || !preco || !imagem) {
            return res.status(400).send({
                message: 'Todos os campos são obrigatórios'
            })
        }

        const cardapio = new Cardapio()
        cardapio.descricao = descricao
        cardapio.preco = preco
        cardapio.imagem = imagem
        await cardapio.save()


        res.status(200).send({
            message: 'Produto inserido no cardapio!',
            data: cardapio
        })
    }

    static async listarTodos(req, res) {
        const cardapio = await Cardapio.findAll()
        res.status(200).send({
            message: 'Itens do Cardapio:',
            data: cardapio
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const cardapio = await Cardapio.findByProperty('id', id)
        if (!cardapio) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        const { descricao, preco, imagem } = req.body
        if (descricao) {
            cardapio.descricao = descricao
        }
        if (preco) {
            cardapio.preco = preco
        }
        if (imagem) {
            cardapio.imagem = imagem
        }

        await cardapio.save()

        res.status(200).send({
            message: 'Produto alterado com sucesso!',
            data: cardapio
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const cardapio = await Cardapio.findByProperty('id', id)
        if (!cardapio) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        await cardapio.delete()

        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        })
    }

}