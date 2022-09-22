import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  
`;

export const Content = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 360px;
    

img {
    width: 8rem;
  }

span {
    margin: 1rem;
    font-size: 1.1rem;
  }

form {
    display: flex;
    flex-direction: column;
    position: relative;

label {
    color: var(--greyish);
    margin-top: 1rem;
}

input {
      width: 328px;
      height: 56px;
      margin: 1rem 0 0;
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
`


