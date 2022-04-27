import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
    return (
        <li><a href={props.el.web}>{props.el.name}</a></li>
    );
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
        };
    }
    render() {
        console.log(data);
        return (
            <>
                <ul>
                    {this.state.seasons.map((e) => <li key={e}>{e}</li>)}
                </ul>
                <ul>
                    {data.frameworks.map((el,index) => (
                        <ElementoLista key={index} el={el}/>
                    ))}
                </ul>
            </>
        );
    }
}