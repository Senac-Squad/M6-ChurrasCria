import ApplicationModel from "./ApplicationModel.js"

export default class Adm extends ApplicationModel {
    id; email; senha; admToken;

    static configurar() {
        Adm.associar('id', 'ID')
        Adm.associar('email', 'EMAIL')
        Adm.associar('senha', 'SENHA')
        Adm.associar('admToken', 'ADM_TOKEN')
    }
}