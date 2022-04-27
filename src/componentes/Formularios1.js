import React, { useState } from 'react';

export default function Formularios1() {
    const [form,setForm]=useState({});
    const handleChange= e=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleChecked= e=>{
        setForm({...form,[e.target.name]:e.target.checked})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        alert("El formulario se ha enviado")
    }
    return (
        <>
            <h4>Formulario</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">nombre</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre}
                    onChange={handleChange}
                />
                <p> ELige tu sabor JS Favorito:</p>
                <label htmlFor="vanilla">Vanilla JS</label>
                <input type="radio" id="vanilla" name="sabor" value="vanilla"
                    onChange={handleChange}
                />
                <label htmlFor="react">React JS</label>
                <input type="radio" id="react" name="sabor" value="react"
                    onChange={handleChange} defaultChecked
                />
                <br />
                <select name="lenguaje"
                    onChange={handleChange}
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
                    onChange={handleChecked}
                />
                <br />
                <input type="submit"></input>
            </form>
        </>
    );
}