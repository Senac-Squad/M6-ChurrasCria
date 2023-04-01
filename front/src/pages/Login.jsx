import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Api from '../api/api.js'
import '../styles/Login.css';


const Login = () => {
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const email = form.elements.Email.value
    const senha = form.elements.Senha.value

    const retorno = await Api().login(email, senha)
    if(!retorno.ok){
        alert('Não foi possível realizar o login')
        return
    }

    const dados = await retorno.json()
    localStorage.setItem('token', dados.token)
    window.location.href = '/admin'
}

return (
    <Container className='conteudo-margin'>
    <h1 >Login</h1>

    <Form onSubmit={handleSubmit}>
            <Form.Group className="" controlId="Email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group className="" controlId="Senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Realizar Login
            </Button  >
        </Form>

    </Container>
)
}

export default Login;