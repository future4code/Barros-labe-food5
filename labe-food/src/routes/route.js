import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/index"
import Home from "../pages/home/index"
import Pedido from "../pages/pedidoemandamento/index"
import Perfil from "../pages/perfil/index"
import Restaurantes from "../pages/perfil/index"
import Buscar from "../pages/search/index"

const Rotas = ()=> {
      return (  
<BrowserRouter>
  <Routes>
      <Route index element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pedido" element={<Pedido/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/restaurantes" element={<Restaurantes/>}/>
      <Route path="/buscar" element={<Buscar/>}/>  
   </Routes>
</BrowserRouter> 
)

}

export default Rotas;