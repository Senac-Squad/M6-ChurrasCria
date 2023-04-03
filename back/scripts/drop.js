import Page from "../src/DAO/Page.js"
import Avaliar from "../src/DAO/Avaliar.js"
import Cardapio from "../src/DAO/Cardapio.js"
import Cliente from "../src/DAO/Cliente.js"
import Pedido from "../src/DAO/Pedido.js"
import Restaurante from "../src/DAO/Restaurante.js"


const models = [
    Page, Avaliar, Cardapio, Cliente, Pedido, Restaurante
]

const drop = async () => {
    await Promise.all(models.map(model => model._drop()))
}

drop()