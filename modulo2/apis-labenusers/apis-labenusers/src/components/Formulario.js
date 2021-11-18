import React from 'react'
import axios from 'axios';


export default class Formulario extends React.Component{
  state = {
    name: "",
    email: "",
  }

  onChangeInputName = (e) => {
    this.setState({name: e.target.value})
  }

  onChangeInputEmail = (e) => {
    this.setState({email: e.target.value})
  }

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Igor-Matsuoka-Carver"
          }
        }
      )
      .then(() => {
        this.setState({name: '' })
        this.setState({email: ''})
        alert("Usuário criado!")
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
      this.setState({name:'', email:''})
  };

  render(){
    return (
      <div className = "App">
        <input
          placeholder = {"Seu nome"}
          value = {this.state.name}
          onChange = {this.onChangeInputName}
        />
        <input
          placeholder = {"Seu e-mail"}
          value = {this.state.email}
          onChange = {this.onChangeInputEmail}
        />
        <button onClick = {this.createUser}>Criar Usuário</button>
      </div>
    );
  }
}