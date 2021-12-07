import React from 'react';
import { Link } from "react-router-dom";

function Login(){
    return <div>
        <h2>Login</h2>
        <input
            placeholder="E-mail"
        />
        <input
            placeholder="senha"
        />
        <Link to="/">Voltar</Link>
        <Link to="/adminhome">Entrar</Link>
    </div>

}

export default Login;