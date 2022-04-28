import React from 'react';
import "./Estilos.css"
import moduleStyle from "./Estilos.module.css"

export default function Estilos () {

    let myStyles= {
        borderRadius: ".7rem",
        margin: "2rem auto",
        backgroundColor:"orange"
    }
    return (
        <section className='estilos'>
            <h3>Estilos CSS en React</h3>
            <h3 className="bg-react">Estilos en React</h3>
            <h3 className="bg-react" style={{borderRadius:"2rem",magin:"1rem"}}>"Estilos en linea</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en línea con un objeto</h3>
            <h3 className={moduleStyle.error}>Estilos con módulos</h3>
            <h3 className={moduleStyle.success}>Estilos con módulos</h3>

        </section>
    )
}