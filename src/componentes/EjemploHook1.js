import React, { useEffect, useState } from 'react';

export default function EjemploHook1() {
    const [montado, setMontado] = useState(false);

    if (!montado) {
        return <>
            <button onClick={() => setMontado(!montado)}>Montar/Desmontar</button>
            <SubComponente valor={100} />
        </>;
    } else {
        return <>
            <button onClick={() => setMontado(!montado)}>Montar/Desmontar</button>
        </>;
    }
}
function SubComponente(props) {
    const [contador,setContador]=useState(props.valor);
    useEffect(() => {
        console.log('Montaje  Subcomponente');
        return () => {
            console.log('Desmontaje Subcomponente');
        };
    },[]);
    useEffect(()=>{
        console.log("Subcomponente cambia de estado", contador);
    });
    useEffect(()=>{
        console.log("Contador cambia", contador);
    },[contador]);
    return <>
        <button onClick={() => setContador(contador + 1)}>Incrementar {contador}</button>
    </>;
}