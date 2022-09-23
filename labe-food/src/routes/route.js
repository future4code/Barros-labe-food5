import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/index"
import Home from "../Pages/home/index"
import Pedido from "../Pages/pedidoemandamento/index"
import Perfil from "../Pages/perfil/index"
import Restaurantes from "../Pages/perfil/index"
import Buscar from "../Pages/search/index"

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