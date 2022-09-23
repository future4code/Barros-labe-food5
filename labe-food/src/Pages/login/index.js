import React from "react";
import { Container, FormContainer } from "./style";
import Logo from "../../img/Logo.png";

const Login = () => {
  return (
    <Container>
    
     <FormContainer>
     <img src={Logo} alt="logo"/>
     <strong>Entrar</strong>
        <form>
          
          <labe> E-mail</labe>
          <input/>

          <labe> Senha</labe>
          <input/>

          <button> Entrar </button>
        </form>
     </FormContainer>
    </Container>
  );

}

export default Login 