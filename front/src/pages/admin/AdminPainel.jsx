import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Api from '../../api/api.js'
import '../../styles/admincss.css'
import { NavLink, Link } from "react-router-dom";


function AdminPainel() {

    return (
        <Container className="conteudo-margin flexflex">
            <h1>Painel Admin</h1>
            <div className='separarAdmin'>
                <Link to='/admin/cardapio'>
                    <h4>Cardapio</h4> 
                </Link>
                <Link to='/admin/restaurante'>
                    <h4>Restaurante</h4> 
                </Link>
            </div>
        </Container>
    )
}

export default AdminPainel