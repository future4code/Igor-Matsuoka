import React from 'react'
import axios from 'axios';


export default class Formulario extends React.Component{
  state = {
    name: "",
    email: "",
    users: [],
  }

  componentDidMount(){
    this.getUsers();
  }

  onChangeInputName = (e) => {
    this.setState({name: e.target.value})
  }

  onChangeInputEmail = (e) => {
    this.setState({email: e.target.value})
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
      .then((response) => {
        this.setState({ users: Response.data });
      })
      .catch((error) => {
        alert(error.response)
      });
  };

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
        this.getUsers()
        this.setState({name: '' })
        this.setState({email: ''})
        alert("Usuário criado!")
      })
      .catch(() => {
        alert("Vimos que colocou alguma informação errada!");
      });
      this.setState({name:'', email:''})
  };

  deleteUser = (id) => {
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
      headers: {
        Authorization: "Igor-Matsuoka-Carver"
      }
    })
    .then(()=>{
      alert("Usuário deletado!")
      this.getUserList()
    })
    .catch((error)=>{
      alert("Erro!")
      console.log(error.response)
    })
  }

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