import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Api from '../../api/api.js'
import '../../styles/admincss.css'

function AdminRestaurant() {
    const [restaurante, setRestaurante] = useState([])

    useEffect (() => {
        async function getRestaurante() {
            const response = await Api().getRestaurante()
            const restaurantes = await response.json()
            setRestaurante(restaurantes.data)
        }

        getRestaurante()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const nome = form.nome.value 
        const endereco = form.endereco.value

        const response = await Api().postRestaurante({nome, endereco})
        if(!response.ok) {
            alert('Erro ao cadastrar Restaurante')
            return
        }
        const restaurante1 = await response.json()
        alert('Restaurante parceiro cadastrado!')
        setRestaurante([...restaurante, restaurante1.data])
        form.reset()
    }

    async function excluirRestaurante(id) {
        console.log(id)
        const response = await Api().deleteRestaurante(id)
        if(!response.ok) {
            alert('Erro ao excluir restaurante.')
            return
        }

        alert('item excluído com sucesso')
        const restauranteAtualizados = restaurante.filter((item) => item.id !== id)
        setRestaurante(restauranteAtualizados)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}

        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]

        const inputNome = document.createElement('input')
        inputNome.type = 'text'
        inputNome.value = colunaNome.innerText
        colunaNome.innerText = ''
        colunaNome.appendChild(inputNome)

        const colunaEndereco = linha.children[2]
        const inputEndereco = document.createElement('input')
        inputEndereco.type = 'text'
        inputEndereco.value = colunaEndereco.innerText
        colunaEndereco.innerText = ''
        colunaEndereco.appendChild(inputEndereco)

    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[2]
        const inputNome = colunaNome.children[0]
        const colunaEndereco = linha.children[1]
        const inputEndereco = colunaEndereco.children[0]

        const response = await Api().patchRestaurante({id: id, nome: inputNome.value,endereco: inputEndereco.value})
        if(!response.ok) {
            alert('Erro ao editar')
            return
        }
        alert('Restaurante editada com sucesso')
        
        colunaNome.innerText = inputNome.value
        colunaEndereco.innerText = inputEndereco.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="admin-margin">
            <h1>Admin Restaurante</h1>
            <hr />
            <h2>Adicionar um Restaurante paceiro!</h2>
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
            <p>Lista de Restaurantes</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurante.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.endereco}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => {habilitarEdicao(event.target, item.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluirRestaurante(item.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminRestaurant;