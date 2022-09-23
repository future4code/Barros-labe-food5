
import axios from "axios";
import {useForm} from "../../hook/useForm"
import { Container, FormContainer } from "./style";
import Logo from "../../img/Logo.png";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import {goToHome} from "../../routes/cordinator"
const Login = () => {

  const [form, onChange] = useForm({email:"", password:""})
  const navigate=useNavigate()


  const fazerLogin=(event)=>{
    event.preventDefault();

    axios.post(`${BASE_URL}/login`, form)
    .then((response)=> {
      console.log(response.data)
      localStorage.setItem('TokenLogin', response.data.TokenLogin);
      goToHome(navigate)
    })
    .catch((error)=> console.log(error.message))
    }
  


  return (
    <Container>
     <FormContainer>
     <img src={Logo} alt="logo"/>
     <strong>Entrar</strong>
        <form onSubmit={fazerLogin}>
          
          <label htmlFor="email"> E-mail</label>
          <input 
            name="email"
            id="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            required
            />

          <label htmlFor="password"> Senha</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            value={form.password}
            onChange={onChange}
            required
            />

          <button> Entrar </button>
        </form>
     </FormContainer>
    </Container>
  );

}

export default Login 