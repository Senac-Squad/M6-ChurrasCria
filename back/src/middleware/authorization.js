import Cliente from "../DAO/Cliente.js"
import Adm from "../DAO/Adm.js"


export const verificarToken = async (req, res, next) => {
    const token = req.headers['x-auth-token']
    if (!token) {
        res.status(401).send({
            success: false,
            message: 'Token não informado!'
        })
        return
    }
    const user = await Cliente.findByProperty('authToken', token)
    if (!user) {
        res.status(401).send({
            success: false,
            message: 'Não autorizado!'
        })
        return
    }
    const adm = await Adm.findByProperty('admToken', token)
    if (!adm) {
        res.status(401).send({
            success: false,
            message: 'Não autorizado!'
        })
        return
    }
    next()
}