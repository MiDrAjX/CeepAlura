import React, {Component} from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FomularioCadastro/FomularioCadastro';
import "./assets/App.css";

class App extends Component {
  render(){
  return(
    <section className="conteudo">
    <FormularioCadastro/>
    <ListaDeNotas/>
    </section>
  )
  }
}

export default App;
