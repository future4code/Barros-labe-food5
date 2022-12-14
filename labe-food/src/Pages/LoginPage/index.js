import React from "react";
import { Container, Content } from "./styles";
import logoImg from "../../assets/logo-future-eats-invert@2x.png";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useForm } from "../../hook/useForm";
import { useNavigate } from "react-router-dom";
import { goToHome, goToSubscribe } from "../../routes/cordinator";

const Login = () => {
  const [body, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(body);



    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        goToHome(navigate);
        alert("Usuário logado com sucesso");
      })
      .catch((error) => {
        console.log(error.message)
        alert("Usuário ou senha incorreta");
      });
    
    clear();
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Future Eats" />
        <strong>Entrar</strong>

        <form onSubmit={fazerLogin}>
          <input
            type="email"
            value={body.email}
            onChange={onChange}
            name="email"
            placeholder="email@email.com"
            required
          />

          <input
            type="password"
            value={body.password}
            name="password"
            placeholder="Mínimo 6 caracteres"
            onChange={onChange}
            required
          />

          <button>Entrar</button>
        </form>
        <button
          onClick={() => {
            goToSubscribe(navigate);
          }}
        >
          Não possui cadastro? Clique aqui
        </button>
      </Content>
    </Container>
  );
};

export default Login;
