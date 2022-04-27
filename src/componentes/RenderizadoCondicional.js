import React, { Component } from "react";
function Login(){
    return (<h4>Login</h4>);
}
function Logout(){
    return (<h4>Logout</h4>);
}
export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state={
            session:true
        };
    }
    render() {
        return (
            <div>
                <h4>Renderizado condicional</h4>
                { this.state.session ? <Login /> : <Logout/>}
            </div>
        );
    }
}
