import Adm from "../DAO/Adm.js"
import { compareSync } from "bcrypt"
import { randomUUID } from "crypto"

export default class AdmController {
    static rotas(app) {
        app.post('/adm', AdmController.admLogin)
    }

    static async admLogin(req, res) {
        const { email, senha } = req.body
        if (!email || !senha) {
            return res.status(400).send({
                message: 'Os campos "email" e "senha" são obrigatórios'
            })
        }

        const adm = await Adm.findByProperty('email', email)
        if (!adm) {
            return res.status(404).send({
                message: 'Adm não encontrado'
            })
        }

        const passwordsMatch = compareSync(senha, adm.senha)
        if (!senha) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        adm.admToken = randomUUID()
        await adm.save()

        res.status(200).send({
            token: adm.admToken
        })
    }
}