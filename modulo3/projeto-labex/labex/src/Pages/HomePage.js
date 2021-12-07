import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return <div>
        <h1>SEJA BEM-VINDO A LABEX</h1>
        <Link to="trips">Ver Viagens</Link>
        <Link to="admin">Área do Admin</Link>
      </div>
  }
  
  export default Home;