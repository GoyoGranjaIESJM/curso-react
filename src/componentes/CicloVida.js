import React, { Component } from 'react';

class Reloj extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM");
    }
    render() {
        return <h3>this.props.hora</h3>;
    }
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se inicializa, aún NO está en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        };
        this.temporizador = null;
    }
    componentDidMount() { // apropiado para  leer de una API REST
        console.log(1, "El componente ya se encentra en el DOM");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props han cambiado");
        console.log(prevProps, prevState);
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toTimeString()
            });
        }, 1000);
    };
    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true,
        });
    };
    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        });
    };
    render() {
        console.log(4, "El componente se dibuja o redibuja");
        return (
            <>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <h2>Ciclo de vida de los componentes de clase</h2>
                {/* <h2>{this.state.hora}</h2> */}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}
