import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width : 360px ;
    margin: 0 auto;

    button {
        margin-top: 10px;
        border: 0;
        
    }
`



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  max-height: 640px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  

  button {
  width: 360px;
  height: 42px;
  margin: 16px 0 0;
  padding: 12px 32px;
  border: 0;
  background: transparent;
  font-weight: 500;
  font-size: 1.025rem;
  }

  img {
    width: 10rem;
    margin-top: 40px;
    padding: 10px;
  }
 strong {
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 400;
 }
  form {
    display: flex;
    flex-direction: column;

    input {
      width: 328px;
      height: 56px;
      margin: 2rem 0 0;
      padding: 19px 48px 19px 16px;
      border-radius: 2px;
      border: solid 1px var(--greyish);
    }

    button {
      width: 328px;
      height: 42px;
      padding: 12px 16px;
      border-radius: 2px;
      background-color: var(--mid-green);
      border: 0;
      margin-top: 1rem;
      transition: filter 0.2s;

      
    

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
