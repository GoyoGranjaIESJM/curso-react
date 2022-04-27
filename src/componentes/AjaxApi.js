import React, { Component } from 'react';

function Pokemon(props) {
    return (<img src={props.avatar} alt={props.name} />);
}

export default class AjaxApi extends Component {
    state = {
        pokemons: []
    };
    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                            let pokemons = [...this.state.pokemons, pokemon];
                            this.setState({ pokemons });
                        });
                });
            });
    }
    render() {
        return (
            <>
                <h2>Peticiones asíncronas</h2>
                {this.state.pokemons.map(pokemon => 
                     <Pokemon key={pokemon.id} avatar={pokemon.avatar} name={pokemon.name} />
                )}
            </>
        );
    }
}
