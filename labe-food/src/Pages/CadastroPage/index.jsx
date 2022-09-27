import React from "react";
import { Container, Content } from "./styles";
import logoImg from "../../assets/logo-future-eats-invert@2x.png";
import { useForm } from "../../hook/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants";
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/cordinator";

const Cadastro = () => {
  const navigate = useNavigate()

  const [body, onChange, clear] = useForm({
    nome: "",
    email: "",
    cpf: "",
    password: "",
  });

  const fazerCadastro = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((response) => {
        console.log(response.data);
        alert("Usuário cadastrado");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Algo deu errado");
      });
    clear();
  };

  return (
    <Container>
      <button><IoIosArrowBack size={30} onClick={()=>{goToLastPage(navigate)}}></IoIosArrowBack></button>
      <Container>
        <Content>
          
          <img src={logoImg} alt="Logo Future Eats" />
          <strong>Cadastrar</strong>

          <form onSubmit={fazerCadastro}>
            <input
              type="text"
              value={body.nome}
              onChange={onChange}
              name="nome"
              placeholder="Nome e sobrenome"
              required
            />

            <input
              type="email"
              value={body.email}
              name="email"
              placeholder="email@email.com"
              onChange={onChange}
              required
            />

            <input
              type="number"
              value={body.cpf}
              name="cpf"
              placeholder="000.000.000-00"
              onChange={onChange}
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

            <button>Criar</button>
          </form>
        </Content>
      </Container>
    </Container>
  );
};

export default Cadastro;
