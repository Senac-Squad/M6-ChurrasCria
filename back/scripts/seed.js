import Page from "../src/DAO/Page.js"
import Avaliar from "../src/DAO/Avaliar.js"
import Cardapio from "../src/DAO/Cardapio.js"
import Cliente from "../src/DAO/Cliente.js"
import Pedido from "../src/DAO/Pedido.js"
import Restaurante from "../src/DAO/Restaurante.js"
import Adm from "../src/DAO/Adm.js"

import { hashSync } from "bcrypt"


const models = [
    Page, Avaliar, Cardapio, Cliente, Pedido, Restaurante, Adm
]

const seed = async () => {
    // Precisamos configurar as models antes das inserções para ter acesso à tabela de tradução
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = 'Lorem ipsum dolor sit amet.'
    const pages = [page]

    const cardapio = new Cardapio()
    cardapio.descricao = 'Picanha Nobre'
    cardapio.preco = 34.60
    cardapio.imagem = 'https://i0.statig.com.br/bancodeimagens/9z/ip/5d/9zip5d0kq12v953sla36rzh36.jpg'
    const cardapios = [cardapio]

    const cardapio1 = new Cardapio()
    cardapio1.descricao = 'Cupin'
    cardapio1.preco = 18.47
    cardapio1.imagem = 'https://st2.depositphotos.com/51514186/48540/i/600/depositphotos_485404054-stock-photo-picanha-traditional-steak-beef-in.jpg'
    const cardapios1 = [cardapio1]

    const cardapio2 = new Cardapio()
    cardapio2.descricao = 'Costela prime'
    cardapio2.preco = 29.95
    cardapio2.imagem = 'https://www.vpjalimentos.com.br/wp-content/uploads/2020/02/prime-rib-2.jpg'
    const cardapios2 = [cardapio2]

    const cardapio3 = new Cardapio()
    cardapio3.descricao = 'Linguica mineira'
    cardapio3.preco = 9.60
    cardapio3.imagem = 'https://images.tcdn.com.br/img/img_prod/1012480/linguica_mineira_artesanal_400g_79_1_363ac18ce165db60e2d080ed38794742.jpg'
    const cardapios3 = [cardapio3]

    const cardapio4 = new Cardapio()
    cardapio4.descricao = 'Fillet'
    cardapio4.preco = 37.49
    cardapio4.imagem = 'https://cdn.thelondoneconomic.com/wp-content/uploads/2021/10/773e991d-fillet-steak-baked-to-perfection.jpg'
    const cardapios4 = [cardapio4]

    const cardapio5 = new Cardapio()
    cardapio5.descricao = 'Batata frita'
    cardapio5.preco = 15.05
    cardapio5.imagem = 'https://curitibacult.com.br/wp-content/uploads/2020/11/batata-frita-a-vontade-curitiba.png'
    const cardapios5 = [cardapio5]

    const adm = new Adm()
    adm.email = "admin@admin.com"
    adm.senha = hashSync('admin', 10)
    const adms = [adm]

    const cliente = new Cliente()
    cliente.nome = 'rodrigo'
    cliente.endereco = 'freguesia'
    cliente.telefone = '21927779681'
    cliente.email = "rod13@gmail.com"
    cliente.senha = hashSync('12345678', 10)
    cliente.foto = 'https://static.wikia.nocookie.net/super-sonico/images/3/39/Photo_%283%29.jpg/revision/latest?cb=20180218020508&path-prefix=pt-br'
    const clientes = [cliente]

    const cliente1 = new Cliente()
    cliente1.nome = 'luis roberto'
    cliente1.endereco = 'mare'
    cliente1.telefone = '21927779682'
    cliente1.email = "luisr@gmail.com"
    cliente1.senha = hashSync('123456789', 10)
    cliente1.foto = 'https://i.kym-cdn.com/entries/icons/original/000/017/786/tumblr_mjkfjrIFyZ1s8r2c1o1_400.jpg'
    const clientes1 = [cliente1]

    const cliente2 = new Cliente()
    cliente2.nome = 'wesley'
    cliente2.endereco = 'vigario geral'
    cliente2.telefone = '21927779683'
    cliente2.email = "wesley@gmail.com"
    cliente2.senha = hashSync('223456789', 10)
    cliente2.foto = 'https://t2.tudocdn.net/628914?w=1920'
    const clientes2 = [cliente2]

    const cliente3 = new Cliente()
    cliente3.nome = 'hud'
    cliente3.endereco = 'rocinha'
    cliente3.telefone = '21927779684'
    cliente3.email = "hud@gmail.com"
    cliente3.senha = hashSync('323456789', 10)
    cliente3.foto = 'https://yt3.googleusercontent.com/Krhp6wx3KqvQOSzw1_qiYZnGsZ8XnDJr-Pbm8eeixAz9JPGaVb0SdXRgnwcJs-mVXI2x3EUtoA=s900-c-k-c0x00ffffff-no-rj'
    const clientes3 = [cliente3]

    const cliente4 = new Cliente()
    cliente4.nome = 'jonas'
    cliente4.endereco = 'morro alemao'
    cliente4.telefone = '21927779685'
    cliente4.email = "jonas@gmail.com"
    cliente4.senha = hashSync('423456789', 10)
    cliente4.foto = 'https://conteudo.imguol.com.br/c/entretenimento/97/2021/10/31/ice-cube-perde-cache-milionario-de-filme-da-sony-1635679077024_v2_4x3.jpg '
    const clientes4 = [cliente4]

    const avaliar = new Avaliar()
    avaliar.nota = 2
    avaliar.mensagem = 'Ótimo atendimento, carne péssima.'
    const avaliacao = [avaliar]

    const avaliar1 = new Avaliar()
    avaliar1.nota = 4
    avaliar1.mensagem = 'Carne muito boa no ponto, atendimento legal'
    const avaliacao1 = [avaliar1]

    const avaliar2 = new Avaliar()
    avaliar2.nota = 5
    avaliar2.mensagem = 'Estava tudo muito bom, a carne, atendimento. Recomendo'
    const avaliacao2 = [avaliar2]

    const avaliar3 = new Avaliar()
    avaliar3.nota = 4
    avaliar3.mensagem = 'Boa carne, comeria mais'
    const avaliacao3 = [avaliar3]

    const avaliar4 = new Avaliar()
    avaliar4.nota = 3
    avaliar4.mensagem = 'Demorou um pouco para ser atendido, mas a carne tava uma delicia'
    const avaliacao4 = [avaliar4]

    const pedido = new Pedido()
    pedido.total = 55.40
    pedido.data = new Date()
    const pedidos = [pedido]

    const restaurante = new Restaurante()
    restaurante.nome = 'Norte Grill'
    restaurante.endereco = 'Engenho de Dentro'
    restaurante.logo = 'https://nortegrill.com.br/wp-content/uploads/2019/06/Logo-Norte-GRILL-VETOR-com-sombra-e1560126309484.png'
    const restaurantes = [restaurante]

    const restaurante1 = new Restaurante()
    restaurante1.nome = 'Bom na Brasa'
    restaurante1.endereco = 'Bonsucesso'
    restaurante1.logo = 'https://bomdebrasa.com/wp-content/uploads/2019/11/bom-de-brasa.png'
    const restaurantes1 = [restaurante1]

    const restaurante2 = new Restaurante()
    restaurante2.nome = 'Churrascaria Palace'
    restaurante2.endereco = 'Copacabana'
    restaurante2.logo = 'https://churrascariapalace.com.br/wp-content/uploads/2016/12/timeline-1995-logo.png'
    const restaurantes2 = [restaurante2]

    const restaurante3 = new Restaurante()
    restaurante3.nome = 'Mocellin Churrascaria'
    restaurante3.endereco = 'Barra da Tijuca'
    restaurante3.logo = 'https://mocellinchurrascaria.com.br/wp-content/uploads/2020/07/logoFacebook.jpg'
    const restaurantes3 = [restaurante3]

    const restaurante4 = new Restaurante()
    restaurante4.nome = 'Nusr-Et'
    restaurante4.endereco = 'Dubai'
    restaurante4.logo = 'https://w7.pngwing.com/pngs/154/913/png-transparent-computer-icons-salt-salt-face-text-hand.png'
    const restaurantes4 = [restaurante4]

    await Page._seed(pages)
    await Cardapio._seed(cardapios)
    await Cardapio._seed(cardapios1)
    await Cardapio._seed(cardapios2)
    await Cardapio._seed(cardapios3)
    await Cardapio._seed(cardapios4)
    await Cardapio._seed(cardapios5)

    await Adm._seed(adms)

    await Cliente._seed(clientes)
    await Cliente._seed(clientes1)
    await Cliente._seed(clientes2)
    await Cliente._seed(clientes3)
    await Cliente._seed(clientes4)
    await Avaliar._seed(avaliacao)
    await Avaliar._seed(avaliacao1)
    await Avaliar._seed(avaliacao2)
    await Avaliar._seed(avaliacao3)
    await Avaliar._seed(avaliacao4)


    await Pedido._seed(pedidos)
    await Restaurante._seed(restaurantes)
    await Restaurante._seed(restaurantes1)
    await Restaurante._seed(restaurantes2)
    await Restaurante._seed(restaurantes3)
    await Restaurante._seed(restaurantes4)

}

seed()