import Pedido from '../DAO/Pedido.js'
import { verificarToken } from "../middleware/authorization.js"

export default class PedidoController {
    static rotas(app) {
        app.post('/pedido', verificarToken, PedidoController.inserir)
        app.get('/pedido', PedidoController.listarTodos) // id cliente
        app.patch('/pedido/:id', verificarToken, PedidoController.atualizar)
        app.delete('/pedido/:id', verificarToken, PedidoController.deletar)
    }

    static async inserir(req, res) {
        const { total, data } = req.body
        if (!total || !data) {
            return res.status(400).send({
                message: 'Os campos "total" e "data" são obrigatórios'
            })
        }

        const pedido = new Pedido()
        pedido.total = total
        pedido.data = data
        await pedido.save()

        res.status(200).send({
            message: 'Obrigado pela preferência!',
            data: pedido
        })
    }

    static async listarTodos(req, res) {
        const pedido = await Pedido.findAll()
        res.status(200).send({
            message: 'Todos os Pedidos:',
            data: pedido
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const pedido = await Pedido.findByProperty('id', id)
        if (!pedido) {
            return res.status(404).send({
                message: `O pedido de id ${id} não existe`
            })
        }

        const { total, data} = req.body
        if (total) {
            pedido.total = total
        }
        if (data) {
            pedido.data = data
        }

        await pedido.save()

        res.status(200).send({
            message: 'Pedido alterado com sucesso!',
            data: pedido
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const pedido = await Pedido.findByProperty('id', id)
        if (!pedido) {
            return res.status(404).send({
                message: `O pedido de id ${id} não existe`
            })
        }

        await Pedido.delete()

        res.status(200).send({
            message: 'Pedido excluído!'
        })
    }
}