import Container from 'react-bootstrap/Container'
import axios from 'axios'
import '../styles/gira.css'
import { useState ,useEffect } from 'react';
import { Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";

const Cardapios = () => {
    const [cardapios, setCardapios] = useState([])

    useEffect(() => {
      async function fetchCardapios() {
        try {
          const response = await axios.get(`http://localhost:3001/cardapio`)
          const cardapios = response.data
          setCardapios(cardapios.data)
        } catch (error) {
          console.log(error)
        }
        }
        fetchCardapios()
    }, [])

return (
    <Container className='conteudo-margin'>
        <Row>
        { cardapios.length === 0 ? (<div className="c-loader"></div>) : (
            cardapios.map((item) =>(
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            )))}
        </Row>
    </Container>
)
}

export default Cardapios;