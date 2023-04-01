import Page from "../src/DAO/Page.js"
import Avaliar from "../src/DAO/Avaliar.js"
import Cardapio from "../src/DAO/Cardapio.js"
import Cliente from "../src/DAO/Cliente.js"
import Pedido from "../src/DAO/Pedido.js"
import Restaurante from "../src/DAO/Restaurante.js"

const migrate = async () => {
    await Page._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITLE" TEXT NOT NULL',
        '"TEXT" TEXT NOT NULL'
    ])
    await Avaliar._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOTA" FLOAT NOT NULL',
        '"MENSAGEM" TEXT NOT NULL'
    ])
    await Cliente._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOME" TEXT NOT NULL',
        '"ENDERECO" TEXT NOT NULL',
        '"TELEFONE" TEXT NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"SENHA" TEXT NOT NULL',
        '"FOTO" TEXT',
        '"AUTH_TOKEN" TEXT'
    ])
    await Cardapio._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"DESCRICAO" TEXT NOT NULL',
        '"PRECO" TEXT NOT NULL',
        '"IMAGEM" TEXT'
    ])
    await Pedido._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TOTAL" FLOAT NOT NULL',
        '"DATA" DATE NOT NULL'
    ])
    await Restaurante._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOME" TEXT NOT NULL',
        '"ENDERECO" TEXT NOT NULL',
        '"LOGO" TEXT'
    ])
}

migrate()