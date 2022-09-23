import React from "react";
import { Container, Content } from "./styles";
import logoImg from '../../assets/logo-future-eats-invert@2x.png'

const Login = () => {
  return (
     <Container>

      <Content>
        <img src={logoImg} alt="Logo Future Eats" />
        <span>Entrar</span>
        <form>
          <input type="email" name="email" placeholder="email@email.com" />
          <input type="password" name="password" placeholder="Mínimo 6 caracteres" />
          <button>Entrar</button>
        </form>
      </Content>
    
      

     </Container>
  );

}

export default Login 