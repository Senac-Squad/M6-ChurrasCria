import ApplicationModel from "./ApplicationModel.js"

export default class Cardapio extends ApplicationModel {
    id; descricao; preco; imagem;

    static configurar() {
        Cardapio.associar('id', 'ID')
        Cardapio.associar('descricao', 'DESCRICAO')
        Cardapio.associar('preco', 'PRECO')
        Cardapio.associar('imagem', 'IMAGEM')
    }
}