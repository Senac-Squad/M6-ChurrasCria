import cors from "cors";
import express from "express";

import PageController from './controller/PageController.js'
import ClienteController from './controller/ClienteController.js'
import AvaliarController from './controller/AvaliarController.js'
import RestauranteController from './controller/RestauranteController.js'
import CardapioController from './controller/CardapioController.js'
import PedidoController from './controller/PedidoController.js'
import AdmController from './controller/AdmController.js'

import PageDAO from './DAO/Page.js'
import ClienteDAO from './DAO/Cliente.js'
import AvaliarDAO from './DAO/Avaliar.js'
import RestauranteDAO from "./DAO/Restaurante.js"
import CardapioDAO from "./DAO/Cardapio.js"
import PedidoDAO from "./DAO/Pedido.js"
import AdmDAO from "./DAO/Adm.js"

const app = express()
app.use(cors())
app.use(express.json())

PageDAO.configurar()
ClienteDAO.configurar()
AvaliarDAO.configurar()
RestauranteDAO.configurar()
CardapioDAO.configurar()
PedidoDAO.configurar()
AdmDAO.configurar()

PageController.rotas(app)
ClienteController.rotas(app)
AvaliarController.rotas(app)
RestauranteController.rotas(app)
CardapioController.rotas(app)
PedidoController.rotas(app)
AdmController.rotas(app)

export default app