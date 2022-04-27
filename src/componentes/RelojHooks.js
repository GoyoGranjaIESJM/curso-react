import React, { useState, useEffect } from 'react';

function Reloj({ hour }) {
    return <h4>{hour}</h4>;
}

export default function RelojHooks() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;
        if (visible) {
            temporizador=setInterval(()=>{
                setHour(new Date().toLocaleTimeString());
            });
        } else {
            clearInterval(temporizador);
        }
        return ()=>{
            console.log("Desmontaje");
            clearInterval(temporizador);
        };
    }, [visible]);

    return <>
        <h4>Reloj Hooks</h4>
        {visible && <Reloj hour={hour} />}
        <button onClick={()=>setVisible(true)}>Iniciar</button>
        <button onClick={()=>setVisible(false)}>Detener</button>
    </>;
}
