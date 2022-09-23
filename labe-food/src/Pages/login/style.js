import styled from "styled-components";


export const Container=styled.div`
display: flex;
justify-content: center ;

`
export const FormContainer=styled.div`
display: flex ;
flex-direction: column ;
max-width: 70%;
height: 80vh ;

justify-content: center ;


input{
  width: 100%;
  height: 30%;
  
}

button{
  width: 100%;
  height: 30%;
  padding: 10px;
  margin-top: 10px; 
  background-color: #5CB646 ;
  border: none;
  transition: filter 0.2s;
  :hover {
    filter: brightness(0.9);
  }
}

img{
  width: 200px;
  margin: 30px auto; 
}
strong{
  margin: 0 auto;

}
`