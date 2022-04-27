import React, {useState} from 'react';

export default function Formularios() {
    const [nombre,setNombre]=useState("");
    const [sabor,setSabor]=useState("");
    console.log(nombre);
    console.log(sabor);
    return (
        <>
        <h4>Formulario</h4>
        <form>
            <label htmlFor="nombre">nombre</label>
            <input type="text" id="nombre" name="nombre" value= {nombre}
                onChange= {e=>setNombre(e.target.value)}
            />
            <p> ELige tu sabor JS Favorito:</p>
            <label htmlFor="vanilla">Vanilla JS</label>
            <input type="radio" id="vanilla" name="sabor" value="vanilla"
                onChange={e=>setSabor(e.target.value)} 
            />
            <label htmlFor="react">React JS</label>
            <input type="radio" id="react" name="sabor" value="react"
                onChange={e=>setSabor(e.target.value)} defaultChecked
            />
        </form>
        </>
    );
}