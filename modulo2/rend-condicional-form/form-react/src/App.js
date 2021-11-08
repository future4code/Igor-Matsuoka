import React from 'react';
import styled from 'styled-components';
import Etapa1 from './componentes/Etapa1.js';
import Etapa2 from './componentes/Etapa2.js';
import Etapa3 from './componentes/Etapa3.js';
import Etapa4 from './componentes/Etapa4.js';

const Button = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Etapa4 />;
        break;
        default:
        return <p>Nenhuma página escolhida</p>
    }
  } 

  mudaEtapa = () => {
    this.setState ({etapa: this.state.etapa + 1})
  }

  render() {
  return (
    <div>
    {this.renderizaEtapa()}
    {this.state.etapa < 4 && (<Button onClick={this.mudaEtapa}>Próxima etapa</Button>)}
    </div>
    )
  }
}

export default App;
