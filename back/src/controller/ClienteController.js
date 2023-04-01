import Cliente from "../DAO/Cliente.js"
import { compareSync } from "bcrypt"
import { randomUUID } from "crypto"

export default class ClienteController {
    static rotas(app) {
        app.post('/login', ClienteController.login)
    }

    static async login(req, res) {
        const { email, senha } = req.body
        if (!email || !senha) {
            return res.status(400).send({
                message: 'Os campos "email" e "senha" são obrigatórios'
            })
        }

        const cliente = await Cliente.findByProperty('email', email)
        if (!cliente) {
            return res.status(404).send({
                message: 'Usuário não encontrado'
            })
        }

        const passwordsMatch = compareSync(senha, cliente.senha)
        if (!senha) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        cliente.authToken = randomUUID()
        await cliente.save()

        res.status(200).send({
            token: cliente.authToken
        })
    }
}