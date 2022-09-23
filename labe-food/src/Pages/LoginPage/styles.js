import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  max-height: 640px;
  margin: 0 auto;

  img {
    width: 8rem;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 328px;
      height: 56px;
      margin: 8px 0 0;
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
