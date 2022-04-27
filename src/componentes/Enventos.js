import React, { Component } from "react";

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar() {
        this.setState({ contador: this.state.contador + 1 });
    }
    restar() {
        this.setState({ contador: this.state.contador - 1 });
    }
    render() {
        return (
            <>
                <h4>Eventos en componente de  ES6</h4>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h4>{this.state.contador}</h4>
            </>
        );
    }
}

export class EventosES7 extends Component {
    state = {
        contador: 0,
    };

    sumar = () => {
        this.setState({ contador: this.state.contador + 1 });
    };
    restar = () => {
        this.setState({ contador: this.state.contador - 1 });
    };
    render() {
        return (
            <>
                <h4>Eventos en componente de clase ES7</h4>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h4>{this.state.contador}</h4>
            </>
        );
    }
}

function Boton (props) {
    return (<button onClick={props.miOnClick}>Componente botón</button>);
}

const Boton1 = ({miOnClick}) => (<button onClick={miOnClick}>Componente botón</button>);

export class MasSobreEventos extends Component {
    handleClick=(e, mensaje)=>{
        console.log(e);  // --> SyntheticBaseEvent
        console.log(e.nativeEvent); // --> PointerEvent
        console.log(e.target); // --> <button> Saludar </button>
        console.log(e.nativeEvent.target); // --> <button> Saludar </button>
        console.log(mensaje);
    };
    render() {
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={ (e)=>this.handleClick(e,"Hola") }>Saludar</button>
                <Boton miOnClick={(e)=>this.handleClick(e,"Hola")} />
                <Boton1 miOnClick={(e)=>this.handleClick(e,"Hola")} />
            </div>
        );
    }
}