import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Avaliar from '../pages/Avaliar'
import Login from '../pages/Login'
import Cardapios from '../pages/Cardapios.jsx'
import AdminPainel from '../pages/admin/AdminPainel'
import AdminCardapio from '../pages/admin/AdminCardapio'
import AdminRestaurant from '../pages/admin/AdminRestaurant'
import AdminLogin from '../pages/admin/AdminLogin'


const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='home' />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/cardapio' element={<Cardapios/>} />  
    <Route path='/avaliar' element={<Avaliar/>} />  
    <Route path='/login' element={<Login/>} />
    <Route path='/adminlogin' element={<AdminLogin/>} /> 
    <Route path='/admin' element={<AdminPainel/>} /> 
    <Route path='/admin/cardapio' element={<AdminCardapio/>} />  
    <Route path='/admin/restaurante' element={<AdminRestaurant/>} /> 

  </Routes>
  )
};

export default Routers;