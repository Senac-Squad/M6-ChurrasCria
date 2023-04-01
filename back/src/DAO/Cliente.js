import ApplicationModel from "./ApplicationModel.js"

export default class Cliente extends ApplicationModel {
    id; nome; endereco; telefone; email; senha; foto; authToken;

    static configurar() {
        Cliente.associar('id', 'ID')
        Cliente.associar('nome', 'NOME')
        Cliente.associar('endereco', 'ENDERECO')
        Cliente.associar('telefone', 'TELEFONE')
        Cliente.associar('email', 'EMAIL')
        Cliente.associar('senha', 'SENHA')
        Cliente.associar('foto', 'FOTO')
        Cliente.associar('authToken', 'AUTH_TOKEN')
    }


}