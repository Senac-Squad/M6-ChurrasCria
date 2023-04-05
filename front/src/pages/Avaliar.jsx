import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Api from '../api/api.js'
import '../styles/Login.css';


const Login = () => {
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const nota = form.elements.Nota.value
    const mensagem = form.elements.Mensagem.value

    const retorno = await Api().postAvaliar({nota, mensagem})
    if(!retorno.ok){
        alert('Não foi possível mandar uma avaliação.')
        return
    }

    window.location.href = '/home'
}

return (
    <Container className='conteudo-margin'>
    <h1>Avaliação</h1>

    <Form onSubmit={handleSubmit}>
            <Form.Group className="" controlId="Nota">
                <Form.Label>Nota</Form.Label>
                <Form.Control type="number" placeholder="Digite uma Nota de 1 a 5" maxLength={1}/>
            </Form.Group>
            <Form.Group className="" controlId="Mensagem">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control type="text" placeholder="Deixe uma mensagem!" />
            </Form.Group>

            <Button variant="primary" type="submit" className="botao" >
                Realizar Avaliação
            </Button  >
        </Form>

    </Container>
)
}

export default Login;