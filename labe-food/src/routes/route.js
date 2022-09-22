import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage";
import Home from "../Pages/HomePage";
import Pedido from "../Pages/PedidoEmAndamentoPage";
import Perfil from "../Pages/PerfilPage";
import Restaurantes from "../Pages/RestaurantesPage";

const Rotas = ()=> {
      return (  
<BrowserRouter>
  <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/pedido" element={<Pedido/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/restaurantes" element={<Restaurantes/>}/>
     
   </Routes>
</BrowserRouter> 
)

}

export default Rotas;