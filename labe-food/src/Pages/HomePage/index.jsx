import React from "react";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { Container} from "./styles";
import { useEffect } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";

const Home = () => {
  useProtectedPage();

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers:{ 
         auth: localStorage.getItem('token') 
        }})
        .then( response => response.data)
        .catch(error => console.log(error))
        
      }, [])

  return (
     
    <Container>

    </Container>
  );

}

export default Home  