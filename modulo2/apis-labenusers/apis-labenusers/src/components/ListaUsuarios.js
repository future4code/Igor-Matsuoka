import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardUsuario = styled.div `
    border: 1px solid black;
    margin: 10px;
`

export default class ListaUsuarios extends React.Component{
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "Igor-Matsuoka-Carver"
              }
            }
          )
          .then((res) => {
            this.setState({ users: res.data });
          })
          .catch((err) => {
            alert("Ocorreu um erro!")
          });
    };

    deleteUser = (id) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                 Authorization: "Igor-Matsuoka-Carver"
                }
            })
            .then((res)=>{
                alert("Usuário deletado!")
                this.getUserList()
            })
            .catch((err)=>{
                alert("Houve um erro!")
            })
      }

    render() {
        console.log(this.state.users)

        const listaUsuarios = this.state.users.map((user)=>{
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick = {() => this.deleteUser(user.id)}>x</button>
            </CardUsuario>
        })

        return(
            <div>
                <h2>Tela Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}