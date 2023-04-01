import ApplicationModel from "./ApplicationModel.js"

export default class Pedido extends ApplicationModel {
    id; total; data;

    static configurar() {
        Pedido.associar('id', 'ID')
        Pedido.associar('total', 'TOTAL')
        Pedido.associar('data', 'DATA')
    }
}