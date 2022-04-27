import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador: 0,
    };
    incrementarContador = () => this.setState({ contador: this.state.contador + 1 });
    render() {
        return (<>
            <h2>Comunicación entre componentes</h2>
            <Hijo mensaje="Msg hijo 1" />
            <Hijo incrementarContador={this.incrementarContador} mensaje="Msg hijo 2" />
        </>);
    }
}

function Hijo(props) {
    return (<h4>
        {props.mensaje}
        <button onClick={props.incrementarContador}>+</button>
    </h4>);
}