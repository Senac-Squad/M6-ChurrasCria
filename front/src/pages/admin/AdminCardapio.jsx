import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Api from '../../api/api.js'
import '../../styles/admincss.css'

function AdminCardapio() {
    const [cardapio, setCardapio] = useState([])

    useEffect (() => {
        async function getCardapio() {
            const response = await Api().getCardapio()
            const cardapios = await response.json()
            setCardapio(cardapios.data)
        }

        getCardapio()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const descricao = form.descricao.value 
        const preco = form.preco.value

        const response = await Api().postCardapio({descricao, preco})
        if(!response.ok) {
            alert('Erro ao cadastrar cardapio')
            return
        }
        const cardapio1 = await response.json()
        alert('item cadastrada com sucesso no cardapio')
        setCardapio([...cardapio, cardapio1.data])
        form.reset()
    }

    async function excluirCardapio(id) {
        console.log(id)
        const response = await Api().deleteCardapio(id)
        if(!response.ok) {
            alert('Erro ao excluir item do cardapio.')
            return
        }

        alert('item excluído com sucesso')
        const cardapiosAtualizados = cardapio.filter((item) => item.id !== id)
        setCardapio(cardapiosAtualizados)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}

        const linha = botao.parentNode.parentNode
        const colunaPreco = linha.children[1]
        // Cria um input para o título
        const inputPreco = document.createElement('input')
        inputPreco.type = 'text'
        inputPreco.value = colunaPreco.innerText
        colunaPreco.innerText = ''
        colunaPreco.appendChild(inputPreco)
        // Cria um input para a descrição
        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaPreco = linha.children[2]
        const inputPreco = colunaPreco.children[0]
        const colunaDescricao = linha.children[1]
        const inputDescricao = colunaDescricao.children[0]

        const response = await Api().patchCardapio({id: id, descricao: inputDescricao.value,preco: inputPreco.value})
        if(!response.ok) {
            alert('Erro ao editar')
            return
        }
        alert('Cardapio editada com sucesso')
        
        colunaDescricao.innerText = inputDescricao.value
        colunaPreco.innerText = inputPreco.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <h1>Admin Cardapio</h1>
            <hr />
            <h2>Adicionar Item ao cardapio</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="preco">
                    <Form.Label>Preco</Form.Label>
                    <Form.Control type="text" placeholder="Digite o preco" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imagem">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Digite o link da imagem" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de Cardapio</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descricao</th>
                        <th>Preco</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {cardapio.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>{item.preco}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => {habilitarEdicao(event.target, item.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluirCardapio(item.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminCardapio