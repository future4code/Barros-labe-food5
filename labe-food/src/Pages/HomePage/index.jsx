import React from "react";
import { useProtectedPage } from "../../hook/useProtectedPage";

const Home = () => {
  useProtectedPage();

  return (
     <h1>Home Page</h1>
  );

}

export default Home  