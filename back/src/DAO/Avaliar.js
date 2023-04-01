import ApplicationModel from "./ApplicationModel.js"

export default class Avaliar extends ApplicationModel {
    id; nota; mensagem;

    static configurar() {
        Avaliar.associar('id', 'ID')
        Avaliar.associar('nota', 'NOTA')
        Avaliar.associar('mensagem', 'MENSAGEM')
    }
}