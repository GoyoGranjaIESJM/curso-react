import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY,setScrollY]=useState(0);

    useEffect(() => { // Equivale a componentDidMount
        console.log("Fase de montaje");
    }, []);  

    useEffect(() => { // Equivale a componentDidUpdate
        console.log("Fase de actualización");
    }); // <- Cuando cambia el estado

    useEffect(() => { // Equivale a componentDidUpdate
        console.log("Moviendo el Scroll");
        const detectarScroll=()=> setScrollY(window.pageYOffset);
        addEventListener("scroll",detectarScroll);
    },[scrollY]); // <- Solo cuando cambia scrollY

    useEffect(() => { // Equivale a componentDidUnmount
        return ()=> {        
            console.log("Fase de desmontaje");
            // Aquí lo que se ejecuta cuando se desmonta el comp.
        };
    });
 
    return (<>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll y del Navegador {scrollY}px</p>
    </>);
}
