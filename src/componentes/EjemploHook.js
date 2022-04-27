import React, { useState, useEffect } from 'react';

export default function EjemploHook(props) {
    const [contador, setContador] = useState(parseInt(props.contador));
    console.log("Se ejecuta", contador);

    useEffect(() => {
        // Cuando se monta el componente o se ejecuta por primera vez
        console.log("Se monta", contador);
    }, []);

    useEffect(() => {
        // Se renderiza (ha cambiado contador)
        console.log("Se renderiza - contador", contador);
    }, [contador]);

    useEffect(() => {
        // Se renderiza (ha cambiado el estado: cualquier valor)
        console.log("Se renderiza - estado", contador);        
        return () => {
            console.log("Se desmonta", contador);
        };
    });
    return (<>
        <button onClick={()=>setContador(contador+1)}>Inc</button>
        <button onClick={()=>setContador(contador-1)}>Dec</button>
        <span>  -{'>'} {contador}</span>
    </>);
}