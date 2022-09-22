import React from "react";
import { Container, Content, LabelEmail, LabelPassword } from "./styles";
import logoImg from '../../assets/logo-future-eats-invert@2x.png'

const Login = () => {
  return (
     <Container>

      <Content>
        <img src={logoImg} alt="Logo Future Eats" />
        <span>Entrar</span>
        <form>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" placeholder="email@email.com" />
          <label htmlFor="password"> Senha </label>
          <input type="password" name="password" placeholder="Mínimo 6 caracteres" />
          <button>Entrar</button>
        </form>
      </Content>
    
      

     </Container>
  );

}

export default Login 