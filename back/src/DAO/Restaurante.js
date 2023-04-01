import ApplicationModel from "./ApplicationModel.js"

export default class Restaurante extends ApplicationModel {
    id; nome; endereco; logo;

    static configurar() {
        Restaurante.associar('id', 'ID')
        Restaurante.associar('nome', 'NOME')
        Restaurante.associar('endereco', 'ENDERECO')
        Restaurante.associar('logo', 'LOGO')
    }
}