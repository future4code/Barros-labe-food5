import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage";
import Home from "../Pages/HomePage";
import Pedido from "../Pages/PedidoEmAndamentoPage";
import Perfil from "../Pages/PerfilPage";
import Restaurantes from "../Pages/RestaurantesPage";
import Cadastro from '../Pages/CadastroPage'

const Rotas = ()=> {
      return (  
<BrowserRouter>
  <Routes>
      <Route index element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pedido" element={<Pedido/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/restaurantes" element={<Restaurantes/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
     
   </Routes>
</BrowserRouter> 
)

}

export default Rotas;