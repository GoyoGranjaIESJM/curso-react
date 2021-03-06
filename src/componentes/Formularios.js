import React, { useState } from 'react';

export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);
    console.log(nombre);
    console.log(sabor);
    console.log(lenguaje);
    console.log(terminos);
    const handleSubmit=e=>{
        e.preventDefault();
        alert("El formulario se ha enviado")
    }
    return (
        <>
            <h4>Formulario</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">nombre</label>
                <input type="text" id="nombre" name="nombre" value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <p> ELige tu sabor JS Favorito:</p>
                <label htmlFor="vanilla">Vanilla JS</label>
                <input type="radio" id="vanilla" name="sabor" value="vanilla"
                    onChange={e => setSabor(e.target.value)}
                />
                <label htmlFor="react">React JS</label>
                <input type="radio" id="react" name="sabor" value="react"
                    onChange={e => setSabor(e.target.value)} defaultChecked
                />
                <br />
                <select name="lenguaje"
                    onChange={e => setLenguaje(e.target.value)}
                    defaultValue="vb"
                >
                    <option value="">---</option>
                    <option value="js">JS</option>
                    <option value="c++">c++</option>
                    <option value="vb">VisualBasic</option>
                </select>
                <br />
                <label htmlFor='terminos'>Aceptar terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos"
                    onChange={e=>setTerminos(e.target.checked)}
                />
                <br />
                <input type="submit"></input>
            </form>
        </>
    );
}