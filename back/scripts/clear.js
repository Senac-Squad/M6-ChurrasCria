import Page from "../src/DAO/Page.js"
import Avaliar from "../src/DAO/Avaliar.js"
import Cardapio from "../src/DAO/Cardapio.js"
import Cliente from "../src/DAO/Cliente.js"
import Pedido from "../src/DAO/Pedido.js"
import Restaurante from "../src/DAO/Restaurante.js"
import Adm from "../src/DAO/Adm.js"


const models = [
    Page, Avaliar, Cardapio, Cliente, Pedido, Restaurante, Adm
]

const clear = async () => {
    await Promise.all(models.map(model => model._clear()))
}

clear()