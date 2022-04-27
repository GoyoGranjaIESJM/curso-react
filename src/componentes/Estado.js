import React, { Component } from "react";
import PropTypes from "prop-types";

function EstadoHijo(props) {
    return (<h4>{props.contadorHijo}</h4>);
}
export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }
    render() {
        return (
            <div><h4>El state</h4>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo={this.state.contador} />
            </div>
        );
    }
}
EstadoHijo.propTypes = {
    contadorHijo:PropTypes.number
};