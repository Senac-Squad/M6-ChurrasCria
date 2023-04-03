import Restaurante from '../DAO/Restaurante.js'
import { verificarToken } from "../middleware/authorization.js"

export default class RestauranteController {
    static rotas(app) {
        app.post('/restaurante', verificarToken, RestauranteController.inserir)
        app.get('/restaurante', RestauranteController.listarTodos)
        app.patch('/restaurante/:id', verificarToken, RestauranteController.atualizar)
        app.delete('/restaurante/:id', verificarToken, RestauranteController.deletar)
    }

    static async inserir(req, res) {
        const { nome, endereco, logo } = req.body
        if (!nome || !endereco || !logo) {
            return res.status(400).send({
                message: 'Os campos "nome", "endereço" e "logo" são obrigatórios'
            })
        }

        const restaurante = new Restaurante()
        restaurante.nome = nome
        restaurante.endereco = endereco
        restaurante.logo = logo
        await restaurante.save()

        res.status(200).send({
            message: 'Restaurante Parceiro Adicionado!',
            data: restaurante
        })
    }

    static async listarTodos(req, res) {
        const restaurante = await Restaurante.findAll()
        res.status(200).send({
            message: 'restaurantes:',
            data: restaurante
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const restaurante = await Restaurante.findByProperty('id', id)
        if (!restaurante) {
            return res.status(404).send({
                message: `Restaurante de id ${id} não existe`
            })
        }

        const { nome, endereco, logo } = req.body
        if (nome) {
            restaurante.nome = nome
        }
        if (endereco) {
            restaurante.endereco = endereco
        }
        if (logo) {
            restaurante.logo = logo
        }

        await restaurante.save()

        res.status(200).send({
            message: 'Restaurante alterado com sucesso!',
            data: restaurante
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const restaurante = await Restaurante.findByProperty('id', id)
        if (!restaurante) {
            return res.status(404).send({
                message: `Restaurante de id ${id} não existe`
            })
        }

        await restaurante.delete()

        res.status(200).send({
            message: 'Parceria finalizada!'
        })
    }
}