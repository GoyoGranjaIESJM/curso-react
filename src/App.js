import React from "react";
import logo from './logo.svg';
import Componente from "./componentes/Componente";
import './App.css';
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/Estado";
import RenderizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RenderizadoElementos";
import {EventosES6, MasSobreEventos} from "./componentes/Enventos";
import {EventosES7} from "./componentes/Enventos";
import Padre from "./componentes/ComunicacionComponentes";
import CicloVida from "./componentes/CicloVida";
import AjaxApi from "./componentes/AjaxApi";

function App() {
  let nombres = ["Pepe", "Juan", "Pedro"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {nombres.map((nombre,key) => <ul key={key}>{nombre}</ul>)}
        </ul>
        <section>
          <Componente msg="Hola soy un componente"></Componente>
          <Propiedades
            cadena="Esto es una cadena"
            numero={19}
            boleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Pepe", email: "pp@pp.es" }}
            funcion={num=>num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="abc" />}
          />
          <Estado />
          <RenderizadoCondicional />
          <RenderizadoElementos />
          <EventosES6 />
          <EventosES7 />
          <MasSobreEventos />
          <Padre />
          <CicloVida />
          <AjaxApi />
        </section>
      </header>
    </div>
  );
}

export default App;

