import React from 'react';

export default class ListaUsuarios extends React.Component{

    render() {
        const usuariosAdicionados = this.props.users.map((usuario) =>{
           return <li key={usuario.id}>{usuario.name}<button onClick={this.props.deleteUser} value={usuario.id}>X</button></li>;
        });

        return(
            <div>
                <ul>{usuariosAdicionados}</ul>
            </div>
        )
    }
}