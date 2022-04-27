import React from "react";
import PropTypes from "prop-types";
export default function Propiedades(props) {
    return (
        <div>
            <h4>{props.porDefecto}</h4>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boleano?"True":"False"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.funcion(42)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}
Propiedades.defaultProps = {
    porDefecto: "Las  Props"
};
Propiedades.propTypes = {
    porDefecto: PropTypes.string,
    numero: PropTypes.number,
    cadena: PropTypes.string.isRequired,
    boleano: PropTypes.bool,
    funcion: PropTypes.func,
    arreglo: PropTypes.array,
    elementoReact: PropTypes.element,
    componenteReact: PropTypes.any
};