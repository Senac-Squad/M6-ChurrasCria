import {Container, Button, Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/corrigibts.css'
function Avaliar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado pelo contato')
    navigate('/home');
  }

    return (
        <Container className='conteudo-margin'>
            <h1>Contato</h1>
    

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nota">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua mensagem" />
                </Form.Group>
                <Button variant="primary" type='submit' onClick={(e) => handleSubmit(e)}>
                    Enviar contato
                </Button>
            </Form>

        </Container>
    );
}
export default Avaliar;