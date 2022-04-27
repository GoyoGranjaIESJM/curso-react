import React, { useState } from 'react';

export default function ContadorHooks(props) {
    // console.log(useState(0));
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
    return (<>
        <h4> Hooks - useState : {props.titulo}  </h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </>);
}
ContadorHooks.defaultProps = {
    titulo: "Prueba contador"
};
